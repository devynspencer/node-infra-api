import { Controller, Get } from '@nestjs/common';

@Controller('servers')
export class ServersController {
  @Get()
  findAll(): string {
    return 'All servers';
  }
}
