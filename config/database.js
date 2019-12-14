// Database
const Sequelize = require('sequelize');
module.exports = new Sequelize('tv_shows', 'postgres', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });