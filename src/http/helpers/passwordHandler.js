import { hash, compare } from "bcryptjs";
import config from "../../config/config";

const encryptPassword = async (passwordPlain) => {
    return await hash(passwordPlain, parseInt(config.iterationsBcrypt, 10))
}

const comparePassword = async (passwordPlain, passwordHash) => {
    return await compare(passwordPlain, passwordHash)
}

export { encryptPassword, comparePassword }