import express from 'express';
import cors from 'cors';
import currentURL from './libs/currentURL.js';
import {config} from 'dotenv'
import morgan from 'morgan';
import usersRouters from './routes/users.routes.js'

config();

const app = express();

const port = process.env.PORT;
app.set("port", port)

app.use(morgan("dev"));

app.use(cors ({
    origin:`${currentURL}`, credentials: true
}));

app.use(express.json());

app.use('/', express.static('./src/public'))

app.use(express.urlencoded({extended: true}))

app.use("/api/users", usersRouters)



export default app;