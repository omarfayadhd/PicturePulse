var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var products=[{
    name:"God father",
    genere:"Drama",
    Image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
  },{
    name:"Howls Moving Castle",
    genere:"Fantasy",
    Image:"https://i.pinimg.com/736x/75/4f/d0/754fd044feb41a92ae78c393b2cd461d.jpg"
  },{
    name:"Manjumel Boys",
    genere:"Survival",
    Image:"https://i.pinimg.com/736x/75/4f/d0/754fd044feb41a92ae78c393b2cd461d.jpg"


  } ,{
    name:"Manjumel Boys",
    genere:"Survival",
    Image:"https://i.pinimg.com/736x/75/4f/d0/754fd044feb41a92ae78c393b2cd461d.jpg"
  }]
 
  res.render('index', { products })
  
  
})




module.exports = router;
