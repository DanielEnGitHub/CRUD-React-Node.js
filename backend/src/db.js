import { DataTypes, Op, Sequelize } from "sequelize";

const sequelize = new Sequelize("la_ceiba", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    requestTimeout: 300000,
    options: {
      useUTC: false,
      timezone: "localtime",
      dateFirst: 1,
      enableArithAbort: false,
      dateStrings: true,
      typeCast: true,
      requestTimeout: 300000,
      instanceName: "DEV",
    },
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});

export { DataTypes, sequelize, Op };
