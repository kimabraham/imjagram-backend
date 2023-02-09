import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  getAllUsers(): string {
    return this.authService.getAllUsers();
  }

  @Get('/:id')
  getUser(): string {
    return this.authService.getUser();
  }

  @Post()
  createAccount(@Body() data: any, @Res() res: Response) {
    console.log(data);
    res.send({ success: false, data });
  }
}
