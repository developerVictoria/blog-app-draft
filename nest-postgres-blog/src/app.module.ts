import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from '@nestjs/config';
import ormconfig from "./config/orm.config";
import * as dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });


@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }