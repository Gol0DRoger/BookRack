import express from "express";
import {PORT, uri } from "./config.js"
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"
import BookRoutes from "./routes/BookRoutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());


//Middleware for handling cors policy
app.use(cors()); //allow all
//allow specific
/*app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))*/

app.get('/', (request, response)=>{
console.log(request);
}
)

app.use('/books', BookRoutes);

mongoose
.connect(uri).then(()=>{
console.log("App connected to database");
app.listen(PORT, ()=>{
    console.log(`App is listening on : ${PORT}`);
});
})
.catch((error)=>{
console.log(error);
});