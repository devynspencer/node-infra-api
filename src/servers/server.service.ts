import { Injectable } from '@nestjs/common';
import { Server } from './interfaces/server.interface';
import { UpdateServerDto } from './dto/update-server.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddServerDto } from './dto/add-server.dto';

@Injectable()
export class ServerService {
  constructor(@InjectModel('Server') private readonly serverModel: Model<Server>) {}

  async findAll(): Promise<Server[]> {
    return await this.serverModel.find().exec();
  }

  async find(id: number): Promise<Server> {
    return await this.serverModel.findById(id);
  }

  async add(addServerDto: AddServerDto): Promise<Server> {
    const server = new this.serverModel(addServerDto);
    return await server.save();
  }

  async remove(id: number): Promise<Server> {
    return await this.serverModel.findByIdAndDelete(id);
  }

  async update(id: number, updateDto: UpdateServerDto): Promise<Server> {
    return await this.serverModel.findByIdAndUpdate(id, updateDto);
  }
}
