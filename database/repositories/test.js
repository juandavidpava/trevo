import { getConnection } from "../../config/database";

const getTests = async () => {
    const connection = await getConnection()
    const reponse = await  connection.query("SELECT * FROM prueba")
    return reponse;
};

export const repository = { getTests }