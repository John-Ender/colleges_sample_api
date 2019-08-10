const express = require('express');
const router = require('express-promise-router')();

const v1Routes = require('./routes/v1/v1.routes');
const HttpErrorHandler = require('./utils/httpErrors/httpErrorHandler');

const app = express();

router.get('/', function (req, res) {
    res.send();
});

router.use('/v1', v1Routes);

// Any errors thrown by middleware or application code on the server will get caught by this handler.
// **NOTE:** This must be declared last so it captures Errors correctly
router.use(HttpErrorHandler.httpErrorHandler);

app.use(router);

const server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port)
});
