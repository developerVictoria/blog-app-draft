import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Comment } from "../../comment/entities/comment.entity";
import { User } from 'src/user/entities/user.entity';
@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({ type: "numeric", array: true, default: [] })
    comments: number[];

    @Column("int", { default: 0 })
    author: number;
}