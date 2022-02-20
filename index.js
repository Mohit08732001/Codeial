const express=require('express');
const port=8000;
const app=express();
const cookieParser=require('cookie-parser');
const expressLayout=require('express-ejs-layouts');

const db=require('./config/mongoose');

//used for session cookie
const session=require('express-session');

const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayout);

//extract style and script from sub pages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used to store session cookie in mognodb
app.use(session({
    name:'codeial',
    //TODO change secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized:false,
    resave: false,
    cookie : {
        maxAge : (1000*60*100) //milliseconds
    },
    store : MongoStore.create({
        mongoUrl:'mongodb://localhost/codeial_development',
        autoRemove:'disabled'
    },function(err){console.log(err || 'connect-mongo setup ok');})
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));
//go to script command in package.json and add start
app.listen(port,function(err){
    if(err){
    console.log(`Error in starting server : ${err}`);
    // return;
    }
    console.log(`Server is started on port ${port}`);
});