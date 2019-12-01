import { Test, TestingModule } from '@nestjs/testing';
import { ServersController } from './servers.controller';

describe('ServersController', () => {
  let serversController: ServersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServersController]
    }).compile();

    serversController = app.get<ServersController>(ServersController);
  });

  describe('/servers', () => {
    it('returns all servers', () => {
      expect(serversController.findAll()).toBe('All servers returned');
    });

    it('returns a server by id', () => {
      expect(serversController.find({ id: 2 })).toBe('Server 2 returned');
    });

    it('adds a server', () => {
      expect(serversController.add({ hostname: 'srv03' })).toBe('Server srv03 added');
    });

    it('removes a server by id', () => {
      expect(serversController.remove({ id: 4 })).toBe('Server 4 removed');
    });

    it('updates a server', () => {
      expect(serversController.update({ id: 5, hostname: 'srv05' })).toBe('Server 5 updated');
    });
  });
});
