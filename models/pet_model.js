import { Sequelize } from "sequelize";
import db from "../config/config.js";
import { Tutor } from "./tutor_model.js";

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

Tutor.hasMany(Pet,{
    constraints: true,
    foreignKey: 'id_tutor'
})

Pet.belongsTo(Tutor,{
    foreignKey: 'id_tutor',
})

export {Pet}