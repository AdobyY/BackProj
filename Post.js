import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author: {type: String, reqired: true},
    title: {type: String, reqired: true},
    content: {type: String, reqired: true},
    picture: {type: String},
})

export default mongoose.model('Post', Post)