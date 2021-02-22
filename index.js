app.get('/playlist/:id', (req, res) => {
  db.movie.findByPk(req.params.id)
  .then((foundMovie) => {
    axios.get(process.env.API_URL, {
      params: {
        apikey: process.env.API_KEY,
        i: foundMovie.imdbId,
        type: 'movie'
      }
    }).then((apiResponse) => {
      res.render('favorites/show', { movie: apiResponse.data})
    })
  })
})