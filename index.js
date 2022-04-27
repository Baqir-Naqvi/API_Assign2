import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import router from './Routes/Router.js';


const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);


mongoose
.connect('mongodb+srv://Baqir:NB8Cwp4JAdXERMHl@cluster0.f4rcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Connected to MongoDB...');
})


const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
}
);
