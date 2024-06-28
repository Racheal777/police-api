import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import { router } from "./routes/route.js";


const app = express()

dbConnection()
app.use(express.json())
app.use(router)

app.listen(8070, () => {
    console.log('app is listening')
})
