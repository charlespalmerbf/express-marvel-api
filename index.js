import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const BASE_URL = "https://comicvine.gamespot.com/api";
const API_KEY = process.env.API_KEY;
const FORMAT = "json";

const getBaseParams = () => ({
  api_key: API_KEY,
  format: FORMAT,
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/characters/`, {
      params: {
        ...getBaseParams(),
        limit: 100,
      },
    });
    console.log("Characters:", response.data.results);
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching characters:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/character/:id", async (req, res) => {
  const characterId = req.params.id;
  try {
    const response = await axios.get(`${BASE_URL}/character/4005-${characterId}/`, {
      params: getBaseParams(),
    });
    console.log("Character:", response.data.results);
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching character:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/issue/:id", async (req, res) => {
  const issueId = req.params.id;
  try {
    const response = await axios.get(`${BASE_URL}/issue/4000-${issueId}/`, {
      params: getBaseParams(),
    });
    console.log("Issue:", response.data.results);
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching issue:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
