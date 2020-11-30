import axios from "axios";

const KEY = "AIzaSyDG1rhepHGyJxTNDm-udbcoAA9PlpaR6iU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
