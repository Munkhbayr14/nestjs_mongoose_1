import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({ required: false })
    username?: string;

    @Prop({ require: false })
    email?: string;

    @Prop({ required: false })
    avatarUrl?: string;


}

export const UserSchema = SchemaFactory.createForClass(User)