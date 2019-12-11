// IMAGES SCRAPER https://www.npmjs.com/package/images-scraper

// GENERAL WEB SCRAPER (FOR TEXT) https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/


// write file
const fs = require('fs');

// web/text scraper
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/Francis_Galton'; 

//images scraper
var Scraper = require ('./index');
 





// IMAGES

let google = new Scraper.Google({
    keyword: 'francis galton',
    limit: 500,
    puppeteer: {
        headless: false
    },
  advanced: {
    imgType: 'photo', // options: clipart, face, lineart, news, photo
    resolution: undefined, // options: l(arge), m(edium), i(cons), etc.
    color: undefined // options: color, gray, trans
  }
});

// WRITE FILE IN NODE https://stackoverflow.com/questions/2496710/writing-files-in-node-js

// WRITE DATA TO JSON OBJECT https://flaviocopes.com/how-to-save-json-object-to-file-nodejs/

// TURN OBJECT INTO STRING https://stackoverflow.com/questions/37859159/fs-writefile-writes-object-object-instead-of-actual-objects-when-closing-sc

(async () => {
    const results = await google.start();
    console.log('SCRAPE RESULTS',results);

    await fs.writeFile('data/img.json', JSON.stringify(results), function(err) {

        if(err) {
            return console.log(err);
        }

        console.log("Image data saved!!!");
    });

})();





// WEB/TEXT

rp(url)
    .then(function(html){
        //success!

        // console.log($('p > a', html).length);
        // console.log($('p > a', html));

        fs.writeFile('data/text.txt', $('p', html), function(err) {

            if(err) {
                return console.log(err);
            }

            console.log("Text data saved!!!");
        });
    })
    .catch(function(err){
        //handle error
    });


    // HOW TO CREATE ARRAY OUT OF TEXT FILE https://stackoverflow.com/questions/34857458/reading-local-text-file-into-a-javascript-array

    // WRITE ARRAY INTO NEW FILE

    var text = fs.readFileSync("./data/text.txt", "utf-8");
    var textByLine = text.split("\n")
    // console.log(textByLine);

        fs.writeFile('data/text-array.txt', textByLine, function(err) {

            if(err) {
                return console.log(err);
            }

            console.log("Text array saved!!!");
        });


