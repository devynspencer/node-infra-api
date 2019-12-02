db.createCollection('servers');

const mockServers = [
  { hostname: 'srv00', role: 'none' },
  { hostname: 'srv01', role: 'web' },
  { hostname: 'srv02', role: 'database' },
  { hostname: 'srv03', role: 'none' },
  { hostname: 'srv04', role: 'proxy' },
  { hostname: 'srv05', role: 'print' },
  { hostname: 'srv06', role: 'app' },
  { hostname: 'srv07', role: 'app' },
  { hostname: 'srv08', role: 'app' },
  { hostname: 'srv09', role: 'database' },
  { hostname: 'srv10', role: 'cache' },
  { hostname: 'srv11', role: 'email' },
  { hostname: 'srv12', role: 'app' },
  { hostname: 'srv13', role: 'vpn' },
  { hostname: 'srv14', role: 'web' },
  { hostname: 'srv15', role: 'web' },
  { hostname: 'srv16', role: 'app' },
  { hostname: 'srv17', role: 'app' },
  { hostname: 'srv18', role: 'none' },
  { hostname: 'srv19', role: 'none' },
  { hostname: 'srv20', role: 'app' }
];

db.servers.insertMany(mockServers);
