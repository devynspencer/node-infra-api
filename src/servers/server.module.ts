import { Module } from '@nestjs/common';
import { ServersController } from './servers.controller';
import { ServerService } from './server.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerSchema } from './schemas/server.schema';

const serverModels = [{ name: 'Server', schema: ServerSchema }];

@Module({
  imports: [MongooseModule.forFeature(serverModels)],
  controllers: [ServersController],
  providers: [ServerService]
})
export class ServerModule {}
