const express=require('express');
const Route=express.Router();
const passport=require('passport');

const PostsController=require('../controllers/postController');

Route.post('/create',passport.checkAuthentication,PostsController.create);

module.exports=Route;