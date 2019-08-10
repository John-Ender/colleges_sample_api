
'use strict'

function httpErrorHandler(err, req, res, next) {
    console.error(`Error: ${err.message}`);
    console.error(err);
    const code = err.httpCode || 500;

    return res.status(code).send(err.message);
}

module.exports = {
    httpErrorHandler,
};
