const express = require("express");
const router = express.Router();
const db = require("../config/database");
const TVShow = require("../models/tv_show_data");
const TVSeason = require("../models/tv_show_seasons");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

// Get TVShows list
router.get("/", (req, res) =>
  TVShow.findAll()
    .then(shows => res.send(shows))
    .catch(err => console.log("retreive tv shows error" + err))
);

// Add a TVShows
router.post("/create", (req, res) => {
  let { TMDB_ID, title, rating, description } = req.body;
  let seasons = req.body;
  let errors = [];
  // Insert into table

  TVShow.create({
    TMDB_ID : TMDB_ID,
    title : title,
    rating : rating,
    description : description
  })
    .then(Response => {
      res.status(200).json({ model: "Your data is saved" });
    })
    .then(() => {
      addSeasons(TMDB_ID);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

router.delete("/delete/:id", async (req, res) => {
  var id = req.params.id;
  TVShow.destroy({
    where: {
      TMDB_ID: id
    }
  })
    .then(Response => {
      res.status(200).json({ model: "Your data is deleted" });
    })
    .catch(err => {
      res.status(400).send("unable to delete");
    });
});

function addSeasons(TMDB_ID) {
  axios
    .get(
      `https://api.themoviedb.org/3/tv/${TMDB_ID}?api_key=21f2b5b6f615bd7d9bcd153290b5398c`
    )
    .then(response => {
      let seasons = response.data.seasons;
      let title = response.data.name;
      for (let i = 0; i < seasons.length; i++) {
        let {
          air_date,
          episode_count,
          id,
          name,
          overview,
          poster_path,
          season_number
        } = seasons[i];
        let season_id = id;

        TVSeason.create({
          season_id: id,
          tv_show_name: title,
          episode_count: episode_count,
          name: name,
          overview: overview,
          TMDB_ID: TMDB_ID,
          air_date : air_date
        })
          .then(Response => {
            console.log(`Season ${season_number} is saved`);
          })
          .catch(err => {
            console.log(err);
          });
      }
    })
    .catch(err => console.log(err));
}

module.exports = router;
