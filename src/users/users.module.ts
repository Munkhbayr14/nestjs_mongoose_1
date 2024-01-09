import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { User, UserSchema } from 'src/schema/User.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSettings, UserSettingsSchema } from 'src/schema/UserSettings.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema,
            },
            {
                name: UserSettings.name,
                schema: UserSettingsSchema,
            }
        ]),
    ],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule { }
