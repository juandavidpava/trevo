import { matchedData } from "express-validator";
import { httpInternalServerError, httpSuccess, httpNotFoundError, httpBadRequestError } from "../helpers/responseHandler";
import { service } from "../../services/draw";

const getDraws = async (req, res) => {
    try {
        const draws = await service.getDraws()       

        httpSuccess(res, {draws})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const addDraw = async (req, res) => {
    try {
        req = matchedData(req)
        const body = {...req}       
        const draw = await service.addDraw(body) 
        httpSuccess(res, {draw})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const findDraw = async (req, res) => {
    try {
        const { id } = req?.params
        if(!id) throw new httpBadRequestError(res)
        const draw = await service.findDraw(id)
        if(!draw) throw new httpNotFoundError(res)
        httpSuccess(res, {draw})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const deleteDraw = async (req, res) => {
    try {
        const { id } = req?.params
        if(!id) throw new httpBadRequestError(res);
        const draw = await service.findUser(id)
        if(!draw) throw new httpNotFoundError(res);
        service.deleteDraw(draw)
        httpSuccess(res)
    } catch (error) {
        httpInternalServerError(res, error)
    }
};



export const controller = {
    getDraws,
    addDraw,
    findDraw,
    deleteDraw    
}
