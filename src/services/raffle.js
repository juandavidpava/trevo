import { repository } from '../database/repositories/raffle.js';

const getRaffles = async () => {
    const raffle = await repository.getRaffles()
    return raffle;
};

const addRaffle = async ruffle => {
    const raffleCreated = await repository.addRaffle(ruffle)   
    return raffleCreated;
};

const findRaffle = async id => {
    const raffle = await repository.findRaffle(id)
    return raffle;
};

const deleteRaffle = async raffle => {
    await repository.deleteRaffle(raffle)
};

export const service = {
    getRaffles,
    addRaffle,
    findRaffle,
    deleteRaffle    
}
