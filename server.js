import { config } from "dotenv-safe"
config()
import express from "express"
import db from "./config/config.js"
import cors from "cors"
import jwt from "jsonwebtoken"
import http from "http"
import bodyParser from "body-parser"
import { verify } from "crypto"

//Models
import { Tutor } from "./models/tutor_model.js"
import { Pet } from "./models/pet_model.js"
import { alturaPet } from "./models/altura_pet_model.js"

//Rotas
import { router as tutorRoutes } from "./routes/tutor_routes.js"
import { router as petRoutes } from "./routes/pet_routes.js"
import { router as alturaPetRoutes } from "./routes/altura_pet_routes.js"
import { router as authRoutes } from "./routes/auth_routes.js"


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

// await db.drop({force: true})
await db.sync()

try {
    await db.authenticate()
    console.log('Conexão com o mysql estabelecida')
} catch (e) {
    console.log('Conexão com o mysql não estabelecida')
    
}

app.use(tutorRoutes)
app.use(petRoutes)
app.use(alturaPetRoutes)
app.use(authRoutes)

app.listen(5000, () => console.log("Servidor executando em http://localhost:5000"))

