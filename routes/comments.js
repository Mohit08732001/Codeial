const express=require('express');
const Route=express.Router();
const passport=require('passport');

const CommentsController=require('../controllers/commentController');

Route.post('/create',passport.checkAuthentication,CommentsController.create);
Route.get('/destroy/:id',passport.checkAuthentication,CommentsController.destroy);

module.exports=Route;