const express=require('express');
const Router=express.Router();

const homeController=require('../controllers/homeController');


console.log('Router is loaded');

Router.get('/',homeController.home);
Router.use('/users',require('./users'));

//for any further routes, access from here
//Router.use('/RouterName',require('Routerlocation'));

module.exports=Router;