import {registerAs} from "@nestjs/config";
import {EnumConfig} from "./enumConfig/enumConfig";
import {Dialect} from "sequelize"
import * as process from "node:process";

export const pgConfig = registerAs(EnumConfig.DATABASE, () => {
    return {
        dialect: <Dialect>process.env.SQL_DIALECT || 'postgresql',
        logging: process.env.SQL_LOGGING === 'true',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DSTABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
    }
})