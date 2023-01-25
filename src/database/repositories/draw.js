import { Draw } from "../models/draw";

const getDraws = async () => {
    const draws = Draw.findAll();
    return draws;
};

const addDraw = async draw => {    
    const drawCreated = new Draw(draw);  
    await drawCreated.save()
    return drawCreated;
};

const findDraw = async id => {   
    const draw = await Draw.findOne({ where: {id}})
    return draw;
};

const deleteDraw = async draw => {
    await draw.destroy()
}


export const repository = {
    getDraws,
    addDraw,
    findDraw,
    deleteDraw,   
}