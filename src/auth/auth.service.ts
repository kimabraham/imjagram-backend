import { ValidateJoinInfoInput } from './dtos/validate-joininfo.dto';
import { GetUserOutput, GetUsersOutput } from './dtos/get-users.dto';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-user.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async getAllUsers(): Promise<GetUsersOutput> {
    try {
      const users = await this.users.find();
      return {
        ok: true,
        msg: 'Get all users success.',
        data: users,
      };
    } catch (err) {
      return {
        ok: false,
        err,
        msg: 'Get all users fail',
      };
    }
  }

  async getUser(userId: string): Promise<GetUserOutput> {
    try {
      const user = await this.users.findOne({ where: { id: +userId } });
      return {
        ok: true,
        msg: 'Get user success.',
        data: user,
      };
    } catch (err) {
      console.log(err);
      return {
        ok: false,
        err,
        msg: 'Get user fail',
      };
    }
  }

  async createUser(
    createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      const { name, password, userId, userName } = createAccountInput;
      const user = await this.users.save(
        this.users.create({ name, password, userId, userName }),
      );
      return {
        ok: true,
        msg: 'User created',
        data: user,
      };
    } catch (err) {
      console.log(err);
      return {
        ok: false,
        err,
        msg: 'User not created.',
      };
    }
  }

  async validateJoinInfo(validateJoinInfoInput: ValidateJoinInfoInput) {
    try {
      const { name, value } = validateJoinInfoInput;
      const existUser = await this.users.findOne({ where: { [name]: value } });
      if (value === '') {
        throw new Error();
      } else if (existUser) {
        return {
          ok: false,
          msg: 'Validate false',
        };
      } else {
        return {
          ok: true,
          msg: 'Validate success',
        };
      }
    } catch (err) {
      return {
        ok: false,
        err,
        msg: 'Validate fail',
      };
    }
  }
}
