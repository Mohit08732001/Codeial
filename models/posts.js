const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
  content:{
      type:String,
      required:true
  },
  user:{
      type:mongoose.SchemaTypes.ObjectId,
      ref:'User'
  },
  //include array of id of all comments
  comments:[{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Comment'
}]
},{
      timestamps:true
  }
);

const Post=mongoose.model('Post',postSchema);

module.exports=Post;