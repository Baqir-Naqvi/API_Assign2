import mongoose from "mongoose";

 const formSchema=new mongoose.Schema({
        BlogTitle:
        {type:String,
        required:true,},
        BlogContent:
        {type:String,
        required:true,},
        BlogCategory:
        {type:String}
    });


export default mongoose.model('Blogs',formSchema);