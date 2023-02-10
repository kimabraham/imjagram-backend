import { Content } from 'src/contents/entities/content.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  userName: string;

  @CreateDateColumn()
  created: Date;
}
