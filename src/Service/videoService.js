import axios from "axios";

export const videoService = {
    query,
}

async function query(keyword) {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${keyword}&key=AIzaSyA9krZ02aDNloGSkQmiwb-2XLuChoMHJh4`);
    const videos = res.data;
    return videos;
}

