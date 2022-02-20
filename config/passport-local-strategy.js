const passport=require('passport');

const LocalStrategy= require('passport-local').Strategy;

const User=require('../models/user');

//authentication using Passport
passport.use(new LocalStrategy({
     usernameField:'email'         
   },
   function(email,password,done){
     //find a user and establish identity
     User.findOne({email:email},function(err,user){
         if(err){console.log('Error in finding user ----->  Passport');
         return done(err);
        }

         if(!user || password!= user.password){
          console.log('Invalid user or password');
         return done(null,false);
         }

         return done(null,user);
     });
   }
));

// serializing the user to decide which key to be kept in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});


//  deserializing the user from key in cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding id ---> Passport');
            return done(err);
        }
        return done(null,user);
    });
});


//check if user is authenticated
passport.checkAuthentication=function(req,res,next){
    //if user is signed in then pass request to next function which is controller and action
    if(req.isAuthenticated()){
        return next();
    }
    // if user is not signed in
      return res.redirect('sign-in');
}


passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains current signed in user from sessional cookie and we are sending it to locals for views
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;