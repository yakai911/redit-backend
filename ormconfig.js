require("dotenv").config();
const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";

module.exports =
  process.env.NODE_ENV === "development"
    ? {
        type: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: true,
        logging: true,
        extra: {
          ssl: false,
        },
        entities: [rootDir + "/entities/**/*{.ts,.js}"],
        migrations: [rootDir + "/migrations/**/*{.ts,.js}"],
        subscribers: [rootDir + "/subscriber/**/*{.ts,.js}"],
        seeds: [rootDir + "/seeds/**/*{.ts,.js}"],
        cli: {
          entitiesDir: rootDir + "/entities",
          migrationsDir: rootDir + "/migrations",
          subscribersDir: rootDir + "/subscriber",
        },
      }
    : {
        name: "default",
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: false,
        entities: [rootDir + "/entities/**/*{.ts,.js}"],
        migrations: [rootDir + "/migrations/**/*{.ts,.js}"],
        subscribers: [rootDir + "/subscriber/**/*{.ts,.js}"],
        seeds: [rootDir + "/seeds/**/*{.ts,.js}"],
        extra: {
          ssl: { rejectUnauthorized: false },
        },
        cli: {
          entitiesDir: rootDir + "/entities",
          migrationsDir: rootDir + "/migrations",
          subscribersDir: rootDir + "/subscriber",
        },
      };
