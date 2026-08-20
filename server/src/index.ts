import express from "express"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT
app.listen(8081, ()=>{
    console.log(`Server is running on port no. 8081`)
})

app.get("/", (req, res)=>{
    res.send("Hello Aslam!")
})