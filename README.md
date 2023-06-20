<h1 align="center">Virtual Makerspace</h1>
  
## Development  
#### Install the dependencies

This will install all dependencies for the app

```sh
npm run install:all
```

#### Start database

This will have postgres and adminer running for the backend

```sh
docker-compose up -d
```

#### Start React app(frontend)

```sh
npm start
```

#### Test Prisma(backend)

```sh
cd backend
npm run generate
npm run migrate
```

you can then use adminer at port 8080, or run

```sh
npm run studio
```

to open up prisma studio to check whether the data is properly saved
