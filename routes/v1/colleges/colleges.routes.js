'use strict'

const router = require('express-promise-router')();
const fs = require('fs');
const _ = require('lodash');

const httpErrors = require('../../../utils/httpErrors/httpErrors');

const dataFile = './assets/college_costs.json';

let colleges = {};

fs.readFile(dataFile, function (err, data) {
    if (err) throw err;

    console.warn('Executing file read: ', dataFile);

    colleges = JSON.parse(data);
});

router.get('/', function (req, res) {
    const name = _.get(req, 'query.College name');
    let roomAndBoard = _.get(req, 'query.Room and board', 'true');

    if (!name) {
        throw new httpErrors.HttpBadRequestError('Error: College name is required');
    }

    if (roomAndBoard.toLowerCase() !== 'true' && roomAndBoard.toLowerCase() !== 'false') {
        throw new httpErrors.HttpBadRequestError('Error: Optional parameter \'Room and board\' must be true or false');
    }

    roomAndBoard = (roomAndBoard == 'true');

    if (!_.has(colleges, name)) {
        throw new httpErrors.HttpNotFoundError('Error: College not found');
    }

    const collegeData = _.get(colleges, name);
    const tuition = _.get(collegeData, 'tuitionInState', 0);
    const housing = _.get(collegeData, 'roomAndBoard', 0);

    res.send(`${(roomAndBoard) ? tuition + housing : tuition}.00`);
});

module.exports = router;
