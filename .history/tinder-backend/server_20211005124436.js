import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:<password>@cluster0.reew5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// Middlewares

// DB config 

// API endpoints
app.get('/', (req,res)=> res.status(200).send("HELLO WORLD"));

// Listener

app.listen(port, ()=>console.log(`listening on localhost: ${port}` ));