import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/greet')
  getPersonalizedHello(@Query('name') name: string): string {
    return this.appService.getPersonalizedHello(name);
  }
}
