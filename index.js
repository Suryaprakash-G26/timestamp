import express from "express"
import Indexrouter from "./src/routes/index.js"

const PORT= process.env.PORT || 8000

const app=express()


app.use('/',Indexrouter)

app.listen(PORT,()=>{
    console.log("hii dude")
})
