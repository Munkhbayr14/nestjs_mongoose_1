import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from 'src/schema/Post.schema'
import { CreatePostDto } from "./dto/createPost.dto";
import { User } from "src/schema/User.schema";

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {

    }
    async createPost({ userId, ...createPostDto }: CreatePostDto) {
        const findUser = await this.userModel.findById(userId)
        if (!findUser) throw new NotFoundException("Kimchi not Found!!!")
        const newPost = new this.postModel(createPostDto)
        const savePost = await newPost.save();
        await findUser.updateOne({
            $push: {
                posts: savePost._id
            }
        })
        return savePost
    }

    getPosts() {
        return this.postModel.find();
    }

    findPostById() { }
}