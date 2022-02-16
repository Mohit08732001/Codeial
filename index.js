const express=require('express');
const port=8000;
const app=express();
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.static('./assets'));
app.use(expressLayout);

//extract style and script from sub pages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
//go to script command in package.json and add start
app.listen(port,function(err){
    if(err){
    console.log(`Error in starting server : ${err}`);
    // return;
    }
    console.log(`Server is started on port ${port}`);
});