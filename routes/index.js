var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const needle = require('needle');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getElement',async function(req,res){
  let page = await needle("GET", req.body.link);
  // console.log(page.body);
  // request.get(req.body.link, (error,response,html)=>{
    const $ = await cheerio.load(page.body,  { decodeEntities: false });
    if(req.body.choosedClass ==null){
      console.log($.html());
      res.send($.html());
    }else{
      console.log($.html());
      res.send($(req.body.choosedClass).html());
    }
  // })
});

module.exports = router;
