import { Test, TestingModule } from '@nestjs/testing';
import { ServersController } from './servers.controller';
import { ServerService } from './server.service';

describe('ServersController', () => {
  let serversController: ServersController;
  let serverService: ServerService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServersController],
      providers: [ServerService]
    }).compile();

    serversController = app.get<ServersController>(ServersController);

    const mockServers = [
      { hostname: 'srv00', role: 'none' },
      { hostname: 'srv01', role: 'web' },
      { hostname: 'srv02', role: 'database' },
      { hostname: 'srv03', role: 'none' },
      { hostname: 'srv04', role: 'proxy' },
      { hostname: 'srv05', role: 'app' }
    ];

    serverService = app.get<ServerService>(ServerService);

    mockServers.forEach((server) => serverService.add(server));
  });

  describe('/servers', () => {
    it('returns all servers', () => {
      expect(serversController.findAll());
    });

    it('returns a server by id', () => {
      expect(serversController.find({ id: 2 }).hostname).toBe('srv02');
    });

    it('adds a server', () => {
      expect(serversController.add({ hostname: 'srv06', role: 'none' }).hostname).toBe('srv06');
    });

    it('removes a server by id', () => {
      expect(serversController.remove({ id: 4 }).hostname).toBe('srv04');
    });

    it('updates a server', () => {
      expect(serversController.update(5, { hostname: 'srv05', role: 'new_role' }).hostname).toBe('srv05');
    });
  });
});
