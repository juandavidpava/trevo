import { Raffle } from '../models/raffle.js';

const getRaffles = async () => {
    const raffles = Raffle.findAll();
    return raffles;
};

const addRaffle = async raffle => {    
    const raffleCreated = new Raffle(raffle);  
    await raffleCreated.save()
    return raffleCreated
    ;
};

const findRaffle= async id => {   
    const raffle = await Raffle.findOne({ where: {id}})
    return raffle;
};

const deleteRaffle = async raffle => {
    await raffle.destroy()
}

export const repository = {
    getRaffles,
    addRaffle,
    findRaffle,
    deleteRaffle,   
}