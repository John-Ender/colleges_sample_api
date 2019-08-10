
'use strict';

var HttpErrorGenerator = require('./httpErrorGenerator');

module.exports = {
    HttpBadRequestError: HttpErrorGenerator('HttpBadRequestError', 'Bad Request', 400),
    HttpNotFoundError: HttpErrorGenerator('HttpNotFoundError', 'Not Found', 404),
};
