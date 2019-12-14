const Sequelize = require('sequelize');
const db = require('../config/database');

const tv_show_data = db.define('tv_show_data', {
  TMDB_ID: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  "createdAt": "createdat",
  "updatedAt": "updatedat"
})

module.exports = tv_show_data;