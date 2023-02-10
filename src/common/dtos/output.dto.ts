import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CoreOutput {
  @IsBoolean()
  ok: boolean;

  @IsString()
  msg: string;

  @IsString()
  @IsOptional()
  err?: string;
}
