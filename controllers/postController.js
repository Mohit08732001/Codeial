const Post=require('../models/posts');
const Comment=require('../models/comments');

try{module.exports.create= async function(req,res){
    await Post.create({
        content:req.body.content,
        user:req.user._id
    });
    
    return res.redirect('back');  
}
}catch(err){
    console.log('Error : ',err);
    return;
}


//deleting a post
try{
module.exports.destroy= async function(req,res){
    let post=await Post.findById(req.params.id);
        //.id means converting object id into string
    if(post.user==req.user.id){
            post.remove();
    }
    await Comment.deleteMany({post:req.params.id});
    return res.redirect('back');
}
}catch(err){
    console.log('Error : ',err);
    return;
}