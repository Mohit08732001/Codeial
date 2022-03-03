const Comment=require('../models/comments');
const Post=require('../models/posts');

module.exports.create=function(req,res){
   Post.findById(req.body.post, function(err,post){
       if(err){console.log('Error in commenting1');return;}
       if(post){
           Comment.create({
               content:req.body.content,
               post:req.body.post,
               user:req.user._id
            },function(err,comment){
                if(err){console.log('Error in commenting');return;}
                post.comments.push(comment);
                post.save();

                return res.redirect('/');
            });
       }
   });
}

module.exports.destroy=function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(err){
           console.log('Error in deleting comment');
           return;
        }
        if(comment.user==req.user.id){
            let postId=comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId,{$pull : {comments:req.params.id}},function(err,post){
              return res.redirect('back');
            });
        }
        else{
            res.redirect('back');
        }
    })
}