import { repository } from "../database/repositories/serie";

const getSeriesByRaffle = async (id) => {
    const raffle = await repository.getSeriesByRaffle(id)
    return raffle;
};

export const service = {
    getSeriesByRaffle     
}
