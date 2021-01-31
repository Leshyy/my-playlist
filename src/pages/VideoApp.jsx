import { useEffect, useState } from "react"
import { VideoList } from "../cmps/VideoList"
import { VideoPlayer } from "../cmps/VideoPlayer"
import { videoService } from "../Service/videoService"

export function VideoApp() {
    const [keyword, setKeyword] = useState('')
    const [video, setVideo] = useState(null)
    const [videos, setVideos] = useState([])


    useEffect(async () => {
        const videoList = await loadVideos()
        if (videoList.length) setVideo(videoList[0])
    }, [])

    const setCurrVideo = (video) => {
        setVideo(video)
    }

    const loadVideos = async (ev = null) => {
        if (ev) ev.preventDefault();
        const videos = await videoService.query(keyword);
        setVideos(videos)
        setKeyword('')
        return videos;
    }

    if (!video) return <div>Loading...</div>
    return (
        <section className="video-app">
            <form onSubmit={(ev) => loadVideos(ev)}>
                <input value={keyword} placeholder="Search" onChange={(ev) => setKeyword(ev.target.value)} />
                <button>Search</button>
            </form>
            <div className="flex">
                <VideoList videos={videos} setCurrVideo={setCurrVideo} />
                <VideoPlayer video={video} />
            </div>
        </section>
    )
}
