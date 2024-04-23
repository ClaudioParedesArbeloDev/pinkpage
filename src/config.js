import {config} from 'dotenv'

config();

export default{
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.user,
    password: process.env.PASSWORD
}

