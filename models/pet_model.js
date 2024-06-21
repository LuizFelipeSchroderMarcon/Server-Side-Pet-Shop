import { Sequelize } from "sequelize";
import db from "../config/config.js";

const Pet = db.define('pet',{
    codigo_pet:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_pet:{
        type: Sequelize.STRING(200)
    },
    genero_pet:{
        type: Sequelize.STRING(200)
    }
}, {
    freezeTableName: true
})

export {Pet}