const express = require('express');
const { response } = require('../app');
const router = new express.Router();
let authorName;
let bookName;
let bookCategory;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ma page principal' });
});


/* Post BooksList */
router.post('/books/list',(req,res,next)=> {
   const categ = req.body["research"];
 for(let i = 0;i<livres.length;i++){
    if(livres[i].category == categ){
       authorName = livres[i].author ;
       bookName = livres[i].title;
       bookCategory = livres[i].category;
      response.send(authorName,bookName,bookCategory);

    }
    res.render('booksResult',{ title:'Result',name : authorName, titleBook: bookName, categBook : bookCategory});
  }

})

router.get('/books/list', function(req, res, next) {
  res.render('index', { title: 'Ma page principal' });
});


/* Livres en array objects */
 const livres =[{
  author:"Guillaume Debré",
  title:"L'affaire Lafayette",
  category:"roman Historique"
},{
  author:"Gérald Messadié",
  title:"La conspiration Jeanne d'Arc",
  category:"roman Historique"
},{
  author: "J.R.R Tolkien",
  title: "Le Seigneur des anneaux",
  category:"fantasy"

},{
  author:"Michael Ende ",
  title: "L'Histoire sans fin",
  category:"fantasy"
},{
  author:"Andrzej Sapkowski",
  title:"Le Sorceleur",
  category:"fantasy"
},{
  author:"George R. R. Martin",
  title:"Le Trône de fer",
  category:"fantasy"
},{
  author:"Hervé Bazin",
  title:"Vipère au poing ",
  category:"autobiographie"
},{
  author:"Marie Cardinal",
  title:"Les mots pour le dire",
  category:"autobiographie"
},{
  author:"Giacomo Casanova",
  title:"Histoire de ma vie",
  category:"autobiographie"
}]

module.exports = router;

