import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:uT19RsjUdtw7Wv8Q@cluster0.reew5.mongodb.net/tinderdb?retryWrites=true&w=majority`
// Middlewares

// DB config 

mongoose.connect(connection_url, {
    useNewUrl
})

// API endpoints
app.get('/', (req,res)=> res.status(200).send("HELLO WORLD"));

// Listener

app.listen(port, ()=>console.log(`listening on localhost: ${port}` ));