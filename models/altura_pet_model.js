import { Sequelize } from "sequelize";
import db from "../config/config.js";
import { Pet } from "./pet_model.js";

const alturaPet = db.define('altura_pet',{
    id_altura:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    altura:{
        type: Sequelize.STRING(200)
    }
}, {
    freezeTableName: true
})

Pet.belongsTo(alturaPet,{
    foreignKey: 'codigo_pet'
})

alturaPet.belongsTo(Pet,{
    constraints: true,
    foreignKey: 'codigo_pet'
})

export {alturaPet}
