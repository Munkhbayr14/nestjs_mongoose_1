import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSettings } from "./UserSettings.schema";

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


}

export const UserSchema = SchemaFactory.createForClass(User)
