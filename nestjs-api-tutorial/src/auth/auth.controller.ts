import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthLocalDto } from './dto/auth_local.dto';
import { LocalAuthGuard } from './guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signupEmail')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signupLocal')
  signupLocal(@Body() dto: AuthLocalDto) {
    return this.authService.singUpWithLocal(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('singinLocal')
  async loginLocal(@Request() req) {
    return req.user;
  }
  @HttpCode(HttpStatus.OK)
  @Post('signinEmail')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
