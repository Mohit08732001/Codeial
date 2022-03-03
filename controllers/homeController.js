const Posts=require('../models/posts');
const User=require('../models/user');
// module.exports.home=function(req,res){
//     // console.log(req.cookies);
//     // res.cookie('user-id',25);
//     // Posts.find({},function(err,posts){
//     //     return res.render('home',{title:'Codeial | Home', posts:posts});
//     // })
    
//     //Populating for all user
//     Posts.find({})
//     .populate('user')
//     .populate({
//         path:'comments',
//         populate:{
//             path:'user'
//         }
//     })
//     .exec(function(err,posts){
//         User.find({},function(err,users){
//             return res.render('home',{title:'Codeial | Home', posts:posts,all_users:users});
//         })
        
//     })
// };

//module.exports.functionName 

//Using async await
try{
module.exports.home=async function(req,res){

    let posts= await Posts.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    });

    let users=await User.find({});

    return res.render('home',{title:'Codeial | Home', posts:posts,all_users:users});
}
}catch(err){
    console.log('Error : ',err);
    return;
}