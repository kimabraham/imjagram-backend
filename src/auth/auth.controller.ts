import { Controller, Get } from '@nestjs/common';
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
}
