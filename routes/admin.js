var express = require('express');
var movie=require("../movie/moviedb")   //This is done because the functions in the moviedb.js need to be accesed here so we required it here
var router = express.Router();


/* GET users listing. */
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
    Image:"https://reviewpuram.in/wp-content/uploads/2024/02/Manjummel-Boys-Poster.jpg"

   } ,{
      name:"Manjumel Boys",
      genere:"Survival",
      Image:"https://reviewpuram.in/wp-content/uploads/2024/02/Manjummel-Boys-Poster.jpg"
    }]
 
  res.render('admin/view-products',{admin:true,products});

})
router.get("/add-movie",function(req,res){
    res.render("admin/add-movie")
})
router.post('/admin/add-movie',(req,res) => {
  console.log(req.body);
  console.log(req.files.Poster)



    movie.addmovie(req.body,(result)=>{
    if(result){
      res.redirect('/admin')

    }else{
      res.render("admin/add-product",{error:"Failed to add movie"});
    }
  
  })
})

module.exports = router;
