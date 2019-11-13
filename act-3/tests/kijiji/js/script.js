const kijiji = require("kijiji-scraper");

const fetch = require('node-fetch');

const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')


kijiji.Ad.Get("https://www.kijiji.ca/v-art-collectibles/barrie/bird-taxidermy-common-moorhen/1424248344?undefined").then(function(ad) {
    // Use the ad object
    console.log(ad.title);
}).catch(console.error);




// Ad.Get('https://www.kijiji.ca/v-art-collectibles/barrie/bird-taxidermy-common-moorhen/1424248344?undefined')