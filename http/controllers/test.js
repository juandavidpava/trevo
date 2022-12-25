import { getConnection } from "../../config/database";
const { httpError } = require('../helpers/handleError');

const getTests = async (req, res) => {
    try {
/*         const connection = await getConnection()
        const consulta = await  connection.query("SELECT * FROM prueba")  */
        res.send("YES YES YES!");
    } catch (error) {
        httpError(res, error)
    }
};

module.exports = {getTests}