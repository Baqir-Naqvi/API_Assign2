import express from 'express';
import {
    getallblog,
    getblogbyid,
    addblog,
    updateblog,
    deleteblog,
    homeblog,
    } from '../Controller/BlogController.js'
const router=express.Router();

router.get('/',homeblog);
router.get('/blogs',getallblog);
router.get('/blogs/:id',getblogbyid);
router.post('/blogs/',addblog);
router.put('/blogs/:id',updateblog);
router.delete('/blogs/:id',deleteblog);

export default router;