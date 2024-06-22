import express from "express"
import db from "./config/config.js"
import cors from "cors"

//Models
import { Tutor } from "./models/tutor_model.js"
import { Pet } from "./models/pet_model.js"
import { alturaPet } from "./models/altura_pet_model.js"

//Controller


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors())

await db.drop({force: true})
await db.sync()

try {
    await db.authenticate()
    console.log('Conexão com o mysql estabelecida')
} catch (e) {
    console.log('Conexão com o mysql não estabelecida')
    
}


app.listen(5000, () => console.log("Servidor executando em http://localhost:5000"))

