const express=require('express');
const Route=express.Router();

const userController=require('../controllers/userController');

Route.get('/profile',userController.profile);

Route.get('/sign-up',userController.signUp);

Route.get('/sign-in',userController.signIn);

Route.post('/create',userController.create);
module.exports=Route;