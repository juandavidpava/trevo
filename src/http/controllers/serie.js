import { matchedData } from "express-validator";
import { httpInternalServerError, httpSuccess, httpNotFoundError, httpBadRequestError } from "../helpers/responseHandler";
import { service } from "../../services/serie";

const getSeriesByRaffle = async (req, res) => {
    try { 
        const { id } = req?.params
        console.log('req?.params', req?.params)
        console.log('id', id)
        if(!id) throw new httpBadRequestError(res) 
        const series = await service.getSeriesByRaffle(id)
        
        if(series.length===0) throw new httpNotFoundError(res, `raffle with id=${id} does not exit`)
        httpSuccess(res, {series})
    } catch (err) {
        httpInternalServerError(res, error)
    }
}

export const controller = {
    getSeriesByRaffle  
}
