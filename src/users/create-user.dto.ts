import { IsString, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsDate()
  readonly signup_date: Date;
}
