import { service } from "../../services/login";
import { httpInternalServerError, httpSuccess } from "../helpers/responseHandler";

const login = async (req, res) => {
    try {
        const {username, password} = req?.body

        if(!username || !password) throw new httpBadRequestError(res);

        console.log(username, password)
        const response = await service.login()  
        httpSuccess(res,response)
    } catch (error) {;
        httpInternalServerError(res, error)
    }
};

export const controller = { login }