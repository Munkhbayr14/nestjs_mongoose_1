import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSettings } from "./UserSettings.schema";
import { Post } from "./Post.schema";

@Schema()
export class User {

    @Prop({ required: false })
    username?: string;

    @Prop({ require: false })
    email?: string;

    @Prop({ required: false })
    avatarUrl?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
    settings?: UserSettings

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
    posts: Post[]
}

export const UserSchema = SchemaFactory.createForClass(User)
