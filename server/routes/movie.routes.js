const MovieController = require('../controllers/movie.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){

app.get("api/omdb-all/", async (req, res) => {
    const data = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=289da431`);
    const dataJSON = await data.json();
    res.json(dataJSON);
}, MovieController.getAllMovies); //Para ver todo

app.get("api/omdb-details/", async (req, res) => {
    const data = await fetch(`http://www.omdbapi.com/?i=${req.query.id}&apikey=${process.env.OMDB_API_KEY}`);
    const dataJSON = await data.json();
    res.json(dataJSON);
}, MovieController.getMovie); //Para ver detalles

}
