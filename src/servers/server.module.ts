import { Module } from '@nestjs/common';
import { ServersController } from './servers.controller';
import { ServerService } from './server.service';

@Module({
  controllers: [ServersController],
  providers: [ServerService]
})
export class ServerModule {}
