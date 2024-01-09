import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema, Post } from "src/schema/Post.schema";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { User, UserSchema } from "src/schema/User.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Post.name,
                schema: PostSchema
            },
            {
                name: User.name,
                schema: UserSchema,
            }
        ])
    ],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostModule { }