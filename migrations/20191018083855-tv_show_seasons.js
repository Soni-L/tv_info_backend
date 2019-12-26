"use strict";
require("dotenv").config();

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      "tv_show_seasons",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        tv_show_name: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        season_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        air_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        episode_count: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        overview: {
          type: Sequelize.STRING(1000),
          allowNull: true
        },
        TMDB_ID: {
          type: Sequelize.INTEGER,
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
    queryInterface.dropTable("tv_show_seasons", {
      schema: process.env.PG_SCHEMA
    })
};
