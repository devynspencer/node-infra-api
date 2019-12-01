import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServersController } from './servers/servers.controller';
import { ServerService } from './servers/server.service';

@Module({
  imports: [],
  controllers: [AppController, ServersController],
  providers: [AppService, ServerService]
})
export class AppModule {}
