"use strict";
require("dotenv").config();

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      "tv_show_data",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        TMDB_ID: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        rating: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        description: {
          type: Sequelize.STRING(1000),
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW")
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW")
        }
      },
      {
        schema: process.env.PG_SCHEMA
      }
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable("tv_show_data", { schema: process.env.PG_SCHEMA })
};
