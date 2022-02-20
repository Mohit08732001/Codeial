const express=require('express');
const Route=express.Router();
const passport=require('passport');

const userController=require('../controllers/userController');

Route.get('/profile',passport.checkAuthentication,userController.profile);

Route.get('/sign-up',userController.signUp);

Route.get('/sign-in',userController.signIn);

Route.post('/create',userController.create);

//use passport as a middleware to authenticate
Route.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'users/sign-in'},
),
userController.createSession);

Route.get('/sign-out',userController.destroySession);
module.exports=Route;