import { User } from 'src/auth/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  file_name: string;

  @Column()
  mime_type: string;

  @ManyToOne((type) => User, (user) => user.contents)
  writer: User;

  @ManyToOne((type) => User, (user) => user.like)
  like: [User];

  @CreateDateColumn()
  created: Date;
}
