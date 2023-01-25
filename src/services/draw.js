import { repository } from "../database/repositories/draw";
import { repository as serieRepo } from "../database/repositories/serie";
import { generateSeries } from "./helpers/seriesGenerator";

const getDraws = async () => {
    const users = await repository.getDraws()
    return users;
};

const addDraw = async user => {
    const userCreated = await repository.addDraw(user)
    await serieRepo.addAllSeries(generateSeries(userCreated.digits, userCreated.opportunities, userCreated.id))
    return userCreated;
};

const findDraw = async id => {
    const user = await repository.findDraw(id)
    return user;
};

const deleteDraw = async user => {
    await repository.deleteDraw(user)
};


export const service = {
    getDraws,
    addDraw,
    findDraw,
    deleteDraw    
}
