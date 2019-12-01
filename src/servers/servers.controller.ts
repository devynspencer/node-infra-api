import { Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';

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
  add(@Param() params): string {
    return `Server ${params.hostname} added`;
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
