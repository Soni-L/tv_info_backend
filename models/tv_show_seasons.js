const Sequelize = require("sequelize");
const db = require("../config/database");

const tv_show_seasons = db.define("tv_show_seasons", {
  tv_show_name: {
    type: Sequelize.STRING
  },
  season_id: {
    type: Sequelize.INTEGER
  },
  air_date: {
    type: Sequelize.DATE
  },
  episode_count: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  overview: {
    type: Sequelize.STRING
  },
  createdAt: "createdat",
  updatedAt: "updatedat",
  TMDB_ID: {
    type: Sequelize.STRING
  }
});

tv_show_seasons.associate = function(models) {
    tv_show_seasons.belongsTo(models.tv_show_data, {
    foreignKey: "TMDB_ID",
    targetKey: "id"
  });
};

module.exports = tv_show_seasons;
