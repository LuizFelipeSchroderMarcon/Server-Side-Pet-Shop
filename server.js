import express from "express"
import db from "./config/config.js"
import cors from "cors"

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors())



try {
    await db.authenticate()
    console.log('Conexão com o mysql estabelecida')
} catch (e) {
    console.log('Conexão com o mysql não estabelecida')
    
}


app.listen(5000, () => console.log("Servidor executando em http://localhost:5000"))

