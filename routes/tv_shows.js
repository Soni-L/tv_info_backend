const express = require("express");
const router = express.Router();
const db = require("../config/database");
const TVShow = require("../models/tv_show_data");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get TVShows list
router.get("/", (req, res) =>
  TVShow.findAll()
    .then(shows => res.send(shows))
    .catch(err => console.log("retreive tv shows error" + err))
);

// Add a TVShows
router.post("/create", (req, res) => {
  let { TMDB_ID, title, rating, description } = req.body;
  let errors = [];

  // Insert into table
  TVShow.create({
    TMDB_ID,
    title,
    rating,
    description
  })
    .then(Response => {
      res.status(200).json({ model: "Your data is saved" });
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
  }).then(Response => {
    res.status(200).json({ model: "Your data is deleted" });
  })
  .catch(err => {
    res.status(400).send("unable to delete");
  });
});

module.exports = router;
