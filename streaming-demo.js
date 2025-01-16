const express = require("express");
const fs = require("fs");
const app = express();

app.listen(2025);

app.get("/video", (req, res) => {
  let readStream = fs.createReadStream("BigBuckBunny.mp4");
  let count = 0;
  readStream.on("data", () => {
    count++;
    console.log("sending chunk ", count);
  });
  readStream.pipe(res);
});
