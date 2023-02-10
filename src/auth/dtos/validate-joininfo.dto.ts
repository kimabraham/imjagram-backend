import { IsString } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';

export class ValidateJoinInfoInput {
  @IsString()
  name: string;

  @IsString()
  value: string;
}

export class ValidateJoinInfoOutput extends CoreOutput {}
