import express from "express";
import bodyParser from "body-parser";
import declareEndpoint from "./test.js";

const app = express();
const port = 3000;
export const API_URL =
  "https://api.openweathermap.org/data/3.0/onecall/overview";
export const apiKey = "158a2d9dc512191ebf801252a6157a53";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/local-weather", async (req, res) => {
  try {
    const result = await axios.get(API_URL, {
      params: {
        lat: req.query.latitude,
        lon: req.query.longitude,
        appid: apiKey,
      },
    });
    console.log(result);
    res.render("index.ejs", {
      weather: JSON.stringify(result.data),
    });
  } catch (error) {
    res.render("index.ejs", { weather: JSON.stringify(error.response) });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
