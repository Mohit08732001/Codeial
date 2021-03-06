const express=require('express');
const Router=express.Router();

const homeController=require('../controllers/homeController');


console.log('Router is loaded');

Router.get('/',homeController.home);
Router.use('/users',require('./users'));
Router.use('/posts',require('./posts'));
Router.use('/comments',require('./comments'));
//for any further routes, access from here
//Router.use('/RouterName',require('Routerlocation'));

module.exports=Router;