# node-infra-api
Node/NestJS API for infrastructure assets, statistics, and health

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Setup

Install application dependencies.

```bash
$ npm install
```

Start a container environment containing databases and other external requirements. Configurable via environment variables from an `.env` file.

```bash
docker-compose up --detach
```

## Run

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
