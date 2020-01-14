import axios from "axios";

const KEY = "AIzaSyAE1RfJmlTVoYNXBAiqWh0F8ZAhuyTE3YM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
