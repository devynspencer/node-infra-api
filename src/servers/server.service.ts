import { Injectable } from '@nestjs/common';
import { Server } from './interfaces/server.interface';
import { UpdateServerDto } from './dto/update-server.dto';

@Injectable()
export class ServerService {
  private readonly servers: Server[] = [];

  findAll(): Server[] {
    return this.servers;
  }

  find(id: number): Server {
    return this.servers[id];
  }

  add(server: Server): Server {
    this.servers.push(server);
    return server;
  }

  remove(id: number): Server {
    const server = this.servers[id];
    this.servers.splice(id, 1);
    return server;
  }

  update(id: number, server: Server): Server {
    this.servers[id] = server;
    return this.servers[id];
  }
}
