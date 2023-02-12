import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  createProduct(@Body('code') code) {
    console.log(code)
    return this.appService.getToken(code);
  }
}
