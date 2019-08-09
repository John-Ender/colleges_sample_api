const express = require('express');
const fs = require('fs');
const _ = require('lodash');

const dataFile = './assets/college_costs.json';

let colleges = {};

fs.readFile(dataFile, function(err, data) {
    if (err) throw err;

    colleges = JSON.parse(data);
});

const app = express();

app.get('/', function (req, res) {
    res.send();
});

app.get('/colleges', function (req, res) {
    const name = _.get(req, 'query.College name');
    let roomAndBoard = _.get(req, 'query.Room and board', 'true');

    if (!name) {
        res.status(400).send('Error: College name is required');
    }

    if (roomAndBoard.toLowerCase() !== 'true' && roomAndBoard.toLowerCase() !== 'false') {
        res.status(400).send('Error: Optional parameter \'Room and board\' must be true or false');
    }

    roomAndBoard = (roomAndBoard == 'true');

    if (!_.has(colleges, name)) {
        res.status(404).send('Error: College not found');
        return;
    }

    const collegeData = _.get(colleges, name);
    const tuition = _.get(collegeData, 'tuitionInState', 0);
    const housing = _.get(collegeData, 'roomAndBoard', 0);

    res.send(`${(roomAndBoard) ? tuition + housing : tuition}.00`);
});

const server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port)
});
