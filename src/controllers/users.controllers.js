import { getConnection } from '../database/database.js'

const getUsers = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * from user");
        console.log(result)
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
}

const addUser = async (req, res) => {
    try{
        const {name, lastname, nickname} = req.body;
        const user = {name, lastname, nickname};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO user SET ?", user);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getUsers,
    addUser
};