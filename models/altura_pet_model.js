import { Sequelize } from "sequelize";
import db from "../config/config.js";

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

export {alturaPet}
