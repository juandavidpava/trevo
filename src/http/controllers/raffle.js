import { matchedData } from 'express-validator';
import { httpInternalServerError, httpSuccess, httpNotFoundError, httpBadRequestError } from '../helpers/responseHandler.js';
import { service } from '../../services/raffle.js';

const getRaffles = async (req, res) => {
    try {
        const raffle = await service.getRaffles()       

        httpSuccess(res, {raffle})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const addRaffle = async (req, res) => {
    try {
        req = matchedData(req)
        const body = {...req}       
        const raffle = await service.addRaffle(body) 
        httpSuccess(res, {raffle})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const findRaffle = async (req, res) => {
    try {
        const { id } = req?.params
        if(!id) throw new httpBadRequestError(res)
        const draw = await service.findRafle(id)
        if(!draw) throw new httpNotFoundError(res)
        httpSuccess(res, {draw})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const deleteRaffle = async (req, res) => {
    try {
        const { id } = req?.params
        if(!id) throw new httpBadRequestError(res);
        const draw = await service.findRaffle(id)
        if(!draw) throw new httpNotFoundError(res);
        service.deleteRaffle(draw)
        httpSuccess(res)
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

export const controller = {
    getRaffles,
    addRaffle,
    findRaffle,
    deleteRaffle    
}
