const express = require('express');
const router = express.Router();
const blogModel = require('../models/blogModel.js');

router.get('/', async (req,res)=>{
    const blogs = await blogModel.find({});
    res.render('index', {blogs});
});

router.get('/createPost', (req,res)=>{
    res.render('createPost', {params: {}});
});

router.post('/create_post', async(req, res) => {
    const data = req.body;
    try {
        const blog = new blogModel({
            title: data.title,
            body: data.desc
        });
        await blog.save();
        res.redirect('/app');
        
    } catch (error) {
        console.log(error);
    }
});

router.post('/update_post/:title', async(req, res) => {
    try {
        const updateRes = await blogModel.updateOne({title: req.params.title}, {$set: {
            title: req.body.title,
            body: req.body.desc
        }});
        res.redirect('/app');

    } catch (error) {
        console.log("Got error while uupdsating blog: " + error);
    }
});

router.get('/update_post/:title/:body', async(req, res) => {
    res.render('createPost', {params: {
        title: req.params.title,
        body: req.params.body
    }});
});

router.get('/show_post', async(req, res)=>{
    res.render('showPost', {query: req.query});
});

module.exports = router;