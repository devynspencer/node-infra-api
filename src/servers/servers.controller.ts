import { Controller, Get, Post, Param, Delete, Put, Body } from '@nestjs/common';
import { AddServerDto } from './dto/add-server.dto';
import { ServerService } from './server.service';
import { UpdateServerDto } from './dto/update-server.dto';

@Controller('servers')
export class ServersController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  findAll() {
    return this.serverService.findAll();
  }

  @Get(':id')
  find(@Param() params) {
    return this.serverService.find(params.id);
  }

  @Post()
  add(@Body() dto: AddServerDto) {
    return this.serverService.add(dto);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.serverService.remove(params.id);
  }

  @Put(':id')
  update(@Param('id') id: number, dto: UpdateServerDto) {
    return this.serverService.update(id, dto);
  }
}
