// aelrose server
const express = require("express");
const app = express();
const port = 8000;

console.log("Starting server...");

app.get("/", (req, res) => {
  res.send("╰(*°▽°*)╯\nNothing here..");
});

app.post("/startserver", (req, res) => {
  console.log("Got request");

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://aternos.org/ajax/server/start?access-credits=false");
  xhr.setRequestHeader("accept", "*/*");
  xhr.setRequestHeader(
    "accept-language",
    "en-CA,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,en-GB;q=0.6,en-US;q=0.5"
  );
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("cookie", process.env.AELROSESECURITY);
  xhr.setRequestHeader("pragma", "no-cache");
  xhr.setRequestHeader("priority", "u=1, i");
  xhr.setRequestHeader("referer", "https://aternos.org/server/");
  xhr.setRequestHeader(
    "sec-ch-ua",
    '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"'
  );
  xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
  xhr.setRequestHeader("sec-ch-ua-platform", '"Windows"');
  xhr.setRequestHeader("sec-fetch-dest", "empty");
  xhr.setRequestHeader("sec-fetch-mode", "cors");
  xhr.setRequestHeader("sec-fetch-site", "same-origin");
  xhr.setRequestHeader(
    "user-agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
  );

  xhr.send();

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ result: "SUCCESS" }));
});

app.listen(port, () => {
  console.log(`Hooked onto ${port}`);
});
