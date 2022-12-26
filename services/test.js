import { repository } from "../database/repositories/test";

const getTests = async () => {
    const response = await repository.getTests()
    return response;
};

export const service = { getTests }