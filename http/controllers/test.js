import { service } from "../../services/test";

const { httpError } = require('../helpers/handleError');

const getTests = async (req, res) => {
    try {
        const response = await service.getTests()

        /* res.send("YES YES YES!" ); */
        res.json(response)
    } catch (error) {;
        httpError(res, error)
    }
};

module.exports = { getTests }