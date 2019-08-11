
const router = require('express-promise-router')();
const _ = require('lodash');

const collegeModel = require('../../../models/colleges/college.model');
const httpErrors = require('../../../utils/httpErrors/httpErrors');

router.get('/', function (req, res) {
    const name = _.get(req, 'query.name');
    let roomAndBoard = _.get(req, 'query.roomAndBoard', 'true');

    if (!name) {
        throw new httpErrors.HttpBadRequestError('Error: College name is required');
    }

    if (roomAndBoard.toLowerCase() !== 'true' && roomAndBoard.toLowerCase() !== 'false') {
        throw new httpErrors.HttpBadRequestError('Error: Optional parameter \'roomAndBoard\' must be true or false');
    }

    roomAndBoard = (roomAndBoard == 'true');

    return collegeModel.findOne({name: name})
        .then((college) => {
            if (!college) {
                throw new httpErrors.HttpNotFoundError('Error: College not found');
            }

            const tuition = _.get(college, 'tuitionInState', 0);
            const housing = _.get(college, 'roomAndBoard', 0);

            res.send(`${(roomAndBoard) ? tuition + housing : tuition}.00`);
        });
});

module.exports = router;
