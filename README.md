# Nest-drizzle

## Description

The Nest-Drizzle Integration project combines Nest, Drizzle ORM, and PNPM to provide a streamlined backend development experience. With Nest's modular architecture, TypeScript's strong typing, and decorators, building scalable RESTful APIs and web applications becomes effortless. Drizzle ORM simplifies database operations by mapping entities to TypeScript classes, while PNPM optimizes package installation and dependency management. Join this project to boost your backend development productivity with a well-structured codebase and efficient workflows.


# Setup Database
For this example I used [planetscale](https://planetscale.com/) which provide a really good free tier, fully managed MySQL-compatible.

- Duplicate `.env.example` and name it `.env`
- Copy the `DATABASE_URL` for both branches to the `.env` file

#### DB Migration 
```bash
$ pnpm db:push
```



## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
