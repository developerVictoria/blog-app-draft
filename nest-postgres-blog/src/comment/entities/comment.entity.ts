import { Entity, Generated, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column("int", { default: 0 })
    author: number;

    @Column("int", { default: 0 })
    post: number;

}