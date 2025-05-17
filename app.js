import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// var qr = require("qr-image");
// const http = require("http");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type in your URl : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);

    qr_svg.pipe(fs.createWriteStream("qr-img.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("URL saved to url.txt");
    });
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
