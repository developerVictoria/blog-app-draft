import { DataSourceOptions } from "typeorm";
require('dotenv').config({ path: process.cwd() + '/.env' });
console.log(process.env.DB_TYPE)

const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [
        "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: true,
    logging: true,
};
export default config;