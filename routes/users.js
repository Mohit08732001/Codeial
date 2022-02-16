const express=require('express');
const Route=express.Router();

const userController=require('../controllers/userController');

Route.get('/profile',userController.profile);

module.exports=Route;