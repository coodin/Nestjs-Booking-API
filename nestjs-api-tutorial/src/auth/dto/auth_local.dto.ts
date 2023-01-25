import {
  IsNotEmpty,
  Min,
  MinLength,
} from 'class-validator';

export class AuthLocalDto {
  @IsNotEmpty()
  @MinLength(6)
  username: string;
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
