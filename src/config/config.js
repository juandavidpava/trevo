import { config } from 'dotenv';

config()

export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USERDB || '',
    password: process.env.PASSWORD || '',
    portdb: process.env.PORTDB || 3306,
    port: process.env.PORT || 4000,
    secretKey: process.env.SECRECTKEY || '',
    iterationsBcrypt: process.env.ITERATIONSBCRYPT || 5
}