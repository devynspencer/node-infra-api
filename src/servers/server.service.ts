import { Injectable } from '@nestjs/common';
import { Server } from './interfaces/server.interface';

@Injectable()
export class ServerService {
  private readonly servers: Server[] = [];

  constructor(servers?: Server[]) {
    this.servers = servers || [];
  }

  findAll(): Server[] {
    return this.servers;
  }

  find(id: number) {
    return this.servers[id];
  }

  add(server: Server) {
    this.servers.push(server);
  }

  remove(id: number) {
    this.servers.splice(id, 1);
  }

  update(id: number, server: Server) {
    this.servers[id] = server;
  }
}
