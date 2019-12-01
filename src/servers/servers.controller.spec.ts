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
      expect(serversController.findAll()).toBe('All servers');
    });
  });
});
