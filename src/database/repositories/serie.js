import { QueryTypes } from 'sequelize';

import db from '../../config/database.js';
import { Serie } from '../models/serie.js';

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

const getSeriesByRaffle = async (indexRaffle) => {
    const series = await db.query(`SELECT s.* FROM draws d
        INNER JOIN series s ON d.id=s.idDraw
        INNER JOIN raffles r ON d.id=r.idDraw
        WHERE r.id=${indexRaffle} `, {type: QueryTypes.SELECT})

    return series
}

export const repository = {
    getSeries,
    addSerie,
    findSerie, 
    addAllSeries,
    getSeriesByRaffle   
}