import {
  ValidateJoinInfoInput,
  ValidateJoinInfoOutput,
} from './dtos/validate-joininfo.dto';
import { GetUsersOutput, GetUserOutput } from './dtos/get-users.dto';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-user.dto';
import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  async getAllUsers(): Promise<GetUsersOutput> {
    return this.authService.getAllUsers();
  }

  @Get('/:id')
  async getUser(@Param() userId): Promise<GetUserOutput> {
    return this.authService.getUser(userId);
  }

  @Post('/validate')
  async validateAccountValue(
    @Body() validateJoinInfoInput: ValidateJoinInfoInput,
  ): Promise<ValidateJoinInfoOutput> {
    return this.authService.validateJoinInfo(validateJoinInfoInput);
  }

  @Post()
  async createAccount(
    @Body() createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.authService.createUser(createAccountInput);
  }
}
