import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServersController } from './servers/servers.controller';

@Module({
  imports: [],
  controllers: [AppController, ServersController],
  providers: [AppService],
})
export class AppModule {}
