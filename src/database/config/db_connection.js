require('env2')('.env');

const parseDbUrl = require('parse-database-url');

const Sequelize = require('sequelize');

const { DB_URL } = process.env;

const {
  driver, user, password, database, host,
} = parseDbUrl(DB_URL);

const ssl = host !== 'localhost';

module.exports = new Sequelize(database, user, password, {
  host,
  dialect: driver,
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
