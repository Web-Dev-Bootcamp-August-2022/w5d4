const router = require("express").Router();
const axios = require('axios')

/* GET home page */
router.get("/", (req, res, next) => {
  // request some data from an api
  // and render it in a view
  axios.get('https://swapi.py4e.com/api/films')
    .then(response => {
      // res.send(response.data.results)
      // render them in a view
      const movies = response.data.results.slice(0, 3)
      res.render('index', { movies })
    })
    .catch(err => next(err))
});

module.exports = router;
