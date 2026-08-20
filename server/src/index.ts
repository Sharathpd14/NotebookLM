import express from "express"
import { toNodeHandler } from "better-auth/node"
import {auth} from "./lib/auth.js"
import "dotenv/config"
import cors from "cors"
import { registerRoutes } from "./routes/index.js"
import { errorHandler } from "./middleware/error-handler.middleware.js"


const app = express()
const PORT = process.env.PORT ?? '8081';
const clientUrl = process.env.clientUrl ?? "http://localhost:3001"

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(
    cors(
        {
            origin : clientUrl,
            credentials : true
        }
    )
)

app.use(express.json())


registerRoutes(app)

app.use(errorHandler)

app.listen(PORT, ()=>{
    
    console.log(`Server is running on port no. ${PORT}`)
})

app.get("/", (req, res)=>{
    res.send("Hello Aslam!")
})