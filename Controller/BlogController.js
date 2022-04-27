import express from 'express';
import mongoose from 'mongoose';
import Blogs from '../Model/Mongoose.js'

export const homeblog=(req,res)=>{
    res.send('Welcome to Blog Mania');
}

export const getallblog=async(req, res)=>{ 
    try{
        const forms=await Blogs.find();
        res.send(forms);
    }
    catch(err)
    {
        res.status(500).json({error:err});
    }
}

export const getblogbyid=async (req, res)=>{ 
    try{
        const forms=await Blogs.findById(req.params.id);
        res.send(forms);
    }
    catch(err)
    {
        res.status(500).json({error:err});
    }
}

export const addblog=(req, res)=>{
    const blog=new Blogs({
        BlogTitle:req.body.BlogTitle,
        BlogContent:req.body.BlogContent,
        BlogCategory:req.body.BlogCategory,
    });
    blog.save().then(()=>{
        res.send(blog);
    }).catch(err=>{
        res.status(500).json({error:err});
    }); 
}

export const updateblog=(req, res)=>{
    const id=req.params.id;
    const update={
        BlogTitle:req.body.BlogTitle,
        BlogContent:req.body.BlogContent,
        BlogCategory:req.body.BlogCategory,
    };
    Blogs.findByIdAndUpdate(id,update,(err,Blogs)=>{
        if(!Blogs)
        {
            return res.status(404).send('The Blog with the given ID was not found');
        }
        res.send(Blogs);
    });
}

export const deleteblog=(req, res)=>{
    const id=req.params.id;
    Blogs.findByIdAndRemove(id,(err,Blogs)=>{
        if(!Blogs)
        {
            return res.status(404).send('The Blog with the given ID was not found');
        }
        res.send(Blogs);
    });
}
