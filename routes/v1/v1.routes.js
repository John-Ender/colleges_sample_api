
'use strict'

const router = require('express-promise-router')();

const httpErrors = require('../../utils/httpErrors/httpErrors');
const collegesRouter = require('./colleges/colleges.routes');

router.use('/colleges', collegesRouter);

// Route not found
router.use('*', function (req, res, next) {
    throw new httpErrors.HttpNotFoundError();
});

module.exports = router;
