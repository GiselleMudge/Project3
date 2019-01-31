var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var axios = require('axios');
var cheerio = require('cheerio');

 router.get('/who', function(req, res) {

        axios.get('https://www.who.int/mental_health/publications/disorders_prevention_promotion/en/')
        .then(function(response, html){
            var $ = cheerio.load(response.data);
            // console.log(response.data)
            var result = [];


        $('ul.list > li').each(function(i, element) {
                var link = $(element).find('a').attr('href');
                var title = $(element).find('a').text();
                // console.log(link);
                // console.log(title);

                result.push({
                    title: title,
                    link: 'http://www.who.int' + link,
                });

            })
            // console.log(result);
            res.send(result);
            
        })
        .catch(function(error){
            console.log(error)
        })
    })

module.exports = router;