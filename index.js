const request = require("request");
const cheerio = require("cheerio");

const URL = "https://www.flipkart.com/search?q=mobiles";

request(URL, (err, res, body) => {
  if (err) {
    console.log(err, "error occurred while hitting URL");
  } else {
    let $ = cheerio.load(body); //loading of complete HTML body

    $("div._1AtVbE > div._13oc-S").each(function (index) {
      const link = $(this).find("div._2kHMtA>a").attr("href");
      const name = $(this).find("div._3pLy-c>div.col-7-12>div._4rR01T").text();
      console.log(link); //link for smartphone
      console.log(name); //name of smartphone
    });
  }
});
