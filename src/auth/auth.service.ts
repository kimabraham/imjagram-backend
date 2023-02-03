import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAllUsers(): string {
    return 'HELLO';
  }
  getUser(): string {
    return 'User';
  }
}
