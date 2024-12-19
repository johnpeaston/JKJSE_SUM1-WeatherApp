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

// test.js
declareEndpoint(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
