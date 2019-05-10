require('env2')('.env');

const Sequelize = require('sequelize');

const {
  DB_NAME, DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST,
} = process.env;

const ssl = DB_HOST !== 'localhost';

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  dialectOptions: { ssl },
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
