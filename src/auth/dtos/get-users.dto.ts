import { User } from 'src/auth/entities/user.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

export class GetUsersOutput extends CoreOutput {
  data?: User[];
}

export class GetUserOutput extends CoreOutput {
  data?: User;
}
