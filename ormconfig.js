require("dotenv").config();
const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [rootDir + "/entities/**/*{.ts,.js}"],
  migrations: [rootDir + "/migrations/**/*{.ts,.js}"],
  subscribers: [rootDir + "/subscriber/**/*{.ts,.js}"],
  seeds: [rootDir + "/seeds/**/*{.ts,.js}"],
  cli: {
    entitiesDir: rootDir + "/entities",
    migrationsDir: rootDir + "/migrations",
    subscribersDir: rootDir + "/subscriber",
  },
};
