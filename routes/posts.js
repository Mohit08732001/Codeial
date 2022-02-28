const express=require('express');
const Route=express.Router();

const PostsController=require('../controllers/postController');

Route.post('/create',PostsController.create);

module.exports=Route;