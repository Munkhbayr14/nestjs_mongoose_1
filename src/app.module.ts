import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostModule } from './posts/posts.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin1234:Test111%3B@cluster0.f7yi5ob.mongodb.net/nest_1',
    ),
    UsersModule,
    PostModule,

  ],
})
export class AppModule { }
