import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerModule } from './servers/server.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ServerModule, MongooseModule.forRoot('mongodb://nest:password@localhost/app')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
