import axios from "axios";
import {
  API_URL,
  apiKey,
} from "/Users/mischaearly/Documents/Uni/NCH/Year 3/Software Engineering/SE_SUM1-WeatherApp/index.js";

export default function declareEndpoint(app) {
  app.get("/", async (req, res) => {
    const result = await axios.get(API_URL, {
      params: {
        lat: 50.909698,
        lon: -1.404351,
        appid: apiKey,
      },
    });
    console.log(JSON.stringify(result.data));
  });
}
