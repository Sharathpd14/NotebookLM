import express from "express"
import { toNodeHandler } from "better-auth/node"
import {auth} from "./lib/auth.js"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json())

app.listen(8081, ()=>{
    
    console.log(`Server is running on port no. 8081`)
})

app.get("/", (req, res)=>{
    res.send("Hello Aslam!")
})