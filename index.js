/*const express =require('express')
const mongoose =require('mongoose')
const cors=require('cors')
//const UserModel=require('./models/Users')

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/testcopy")
app.get('/getUsers',(req,res)=>{
   UserModel.find()
   .then(users=> res.json(users))
    .catch(err=> res.json(err))
})
app.listen(3001,()=>{
    console.log("Server is running")  
})  */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users'); // Uncommented this line to import UserModel

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/testcopy", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
