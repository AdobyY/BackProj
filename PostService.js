import Post from './Post.js';

class PostService{
    async create(post){
       
        const createdPost = await Post.create(post);
        return createdPost;
       
    }
    async getAll(){

            const posts = await Post.find();
            return posts;

    }
    async getOne(id){
            if(!id){
                throw new Error('не вказаний ID')
            }
            const post = await Post.findById(id);
            return post
    }
    async update(post){

            const post = req.body
            if(!post._id){
                throw new Error('не вказаний ID')
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return updatedPostf

    }
    async delete(id){
                    const {id} = req.params
            if(!id){
                throw new Error('не вказаний ID')
            }
            const post = await Post.findByIdAndDelete(id);
            return post

    }
}

export default new PostService();