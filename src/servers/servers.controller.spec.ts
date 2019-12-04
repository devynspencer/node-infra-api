import { Test, TestingModule } from '@nestjs/testing';
import { ServersController } from './servers.controller';
import { ServerService } from './server.service';

describe('ServersController', () => {
  let serversController: ServersController;

  const mockServers = [
    { hostname: 'tst01', role: 'test' },
    { hostname: 'tst02', role: 'none' },
    { hostname: 'tst03', role: 'none' },
    { hostname: 'tst04', role: 'none' },
    { hostname: 'tst05', role: 'none' },
    { hostname: 'tst06', role: 'none' }
  ];

  class MockServerService {
    findAll() {
      return mockServers;
    }

    find() {
      return mockServers[1];
    }

    add() {
      return mockServers[6];
    }

    remove() {
      return mockServers[3];
    }

    update() {
      return mockServers[2];
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServersController],
      providers: [
        {
          provide: 'ServerService',
          useClass: MockServerService
        }
      ]
    }).compile();

    serversController = module.get<ServersController>(ServersController);
  });

  describe('/servers', () => {
    it('returns all servers', async () => {
      expect(await serversController.findAll()).toBe(mockServers);
    });

    it('returns a server by id', async () => {
      expect(await serversController.find(1)).toBe(mockServers[1]);
    });

    it('adds a server', async () => {
      expect(await serversController.add(mockServers[6])).toBe(mockServers[6]);
    });

    it('removes a server by id', async () => {
      expect(await serversController.remove(3)).toBe(mockServers[3]);
    });

    it('updates a server', async () => {
      expect(await serversController.update(2, mockServers[2])).toBe(mockServers[2]);
    });
  });
});
