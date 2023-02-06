import { Content } from 'src/contents/entities/content.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  password: string;

  @Column()
  user_name: string;

  @OneToMany((type) => Content, (content) => content.writer)
  contents: [Content];

  @OneToMany((type) => Content, (content) => content.like)
  like: [Content];

  @CreateDateColumn()
  created: Date;
}
