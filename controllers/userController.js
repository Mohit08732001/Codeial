const User=require('../models/user');


module.exports.profile=function(req,res){
  res.render('user',{title:'Users'});
};

module.exports.signUp=function(req,res){
  if(req.isAuthenticated()){
    return res.redirect('profile');
  }
  return res.render('sign-up',{title:'Codeial|Sign Up'});
}

module.exports.signIn=function(req,res){
  if(req.isAuthenticated()){
    return res.redirect('profile');
  }
  return res.render('sign-in',{title:'Codeial|Sign In'});
}

//get Sign Up Data
module.exports.create=function(req,res){
  //TODO
  //check if password and confirm password is not matching
  if(req.body.password!=req.body.confirm_password){
    return res.redirect('back');
  }

  //check if email already exists in database
  User.findOne({email:req.body.email},function(err,user){
      if(err){console.log("Error in finding user in database");return;}
      if(!user){
        User.create(req.body,function(err,user){
          if(err){console.log("Error in creating user in database");return;}
          return res.redirect('sign-in');
        })
      }
      else{
           return res.redirect('back');
      }
  })

}

//Sign In and Session Creation
module.exports.createSession=function(req,res){
  return res.redirect('/');
}

//Sign Out
module.exports.destroySession=function(req,res){
  req.logout();
  return res.redirect('/');
}

