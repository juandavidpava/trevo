import { QueryTypes } from "sequelize";
import db from '../../config/database';
import { Serie } from "../models/serie";

const getSeries = async () => {
    const series = Serie.findAll();
    return series;
};

const addSerie = async serie => {    
    const serieCreated = new Serie(serie);  
    await serieCreated.save()
    return serieCreated;
};

const findSerie = async index => {   
    const serie = await serie.findOne({ where: {index}})
    return draw;
};

const addAllSeries = async (body) => {
    await db.query(`INSERT INTO series(number, \`index\`, idDraw) VALUES ${body}`, {type: QueryTypes.INSERT})
}

export const repository = {
    getSeries,
    addSerie,
    findSerie, 
    addAllSeries   
}