import { Controller, Get, Post, Param, Delete, Put, Body } from '@nestjs/common';
import { AddServerDto } from './dto/add-server.dto';

@Controller('servers')
export class ServersController {
  @Get()
  findAll(): string {
    return 'All servers returned';
  }

  @Get(':id')
  find(@Param() params) {
    return `Server ${params.id} returned`;
  }

  @Post()
  add(@Body() dto: AddServerDto) {
    return `Server ${dto.hostname} added`;
  }

  @Delete(':id')
  remove(@Param() params): string {
    return `Server ${params.id} removed`;
  }

  @Put(':id')
  update(@Param() params): string {
    return `Server ${params.id} updated`;
  }
}
