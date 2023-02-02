import { matchedData } from 'express-validator';
import { httpInternalServerError, httpSuccess, httpNotFoundError, httpBadRequestError } from '../helpers/responseHandler.js';
import { service } from '../../services/serie.js';

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
        httpInternalServerError(res, err)
    }
}

export const controller = {
    getSeriesByRaffle  
}
