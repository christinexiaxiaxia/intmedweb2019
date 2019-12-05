// IMAGE SCRAPE AND SAVE https://www.npmjs.com/package/image-scraper
// GET IMAGE DATA OBJECTS FROM GOOGLE IMAGES https://www.npmjs.com/package/images-scraper
// SCRAPING AND SENDING INFO TO HTML AND JS https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/


var Scraper = require("image-scraper");
 
var scraper = new Scraper("https://en.wikipedia.org/wiki/Francis_Galton");

scraper.scrape(function(image) { 
    image.save();
});