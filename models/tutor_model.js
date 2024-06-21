import { Sequelize } from "sequelize";
import db from "../config/config.js";

const Tutor = db.define('tutor',{
    id_tutor:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    cpf:{
        type: Sequelize.STRING(200)
    },
    nome:{
        type: Sequelize.STRING(200)
    },
    email:{
        type: Sequelize.STRING(200)
    }
}, {
    freezeTableName: true
})


export {Tutor}