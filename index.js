const express = require('express');
const router = require('express-promise-router')();

const app = express();

const mongoUri = 'mongodb://localhost:27017/sample-api';
const mongoose = require('mongoose');
mongoose.connect(mongoUri);

const dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
    console.log('Database Connected: ', mongoUri);
    console.log(dbConnection.db.listCollections().toArray(function (err, names) {
        console.log(names);
    }));
});

const v1Routes = require('./routes/v1/v1.routes');
const v2Routes = require('./routes/v2/v2.routes');
const HttpErrorHandler = require('./utils/httpErrors/httpErrorHandler');

router.get('/', function (req, res) {
    res.send();
});

router.use('/v1', v1Routes);
router.use('/v2', v2Routes);

// Any errors thrown by middleware or application code on the server will get caught by this handler.
// **NOTE:** This must be declared last so it captures Errors correctly
router.use(HttpErrorHandler.httpErrorHandler);

app.use(router);

const server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port)
});
