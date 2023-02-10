import { IsString } from 'class-validator';
import { User } from 'src/auth/entities/user.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

export class CreateAccountInput {
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  userName: string;
}

export class CreateAccountOutput extends CoreOutput {
  data?: User;
}
