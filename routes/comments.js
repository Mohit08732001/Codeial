const express=require('express');
const Route=express.Router();
const passport=require('passport');

const CommentsController=require('../controllers/commentController');

Route.post('/create',passport.checkAuthentication,CommentsController.create);

module.exports=Route;