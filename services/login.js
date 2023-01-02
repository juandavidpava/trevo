import { repository } from "../database/repositories/user";

const login = async () => {
    const response = await repository.addUser()
    return response;
};

export const service = { login }