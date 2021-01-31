import './App.css';
import { VideoList } from './cmps/VideoList';
import { EmbeddedVideo } from './cmps/EmbeddedVideo';
import { videoService } from './Service/videoService.js'
import { useEffect, useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('Angular')
  const [video, setVideo] = useState('')
  const setCurrVideo = (video) => {
    setVideo(video)
  }

  const [videos, setVideos] = useState([])
  useEffect(async () => {
    const videoList = await loadVideos()
    if (videoList.length) setCurrVideo(videoList[0])
  }, [])


  const loadVideos = async (ev = null) => {
    if (ev) ev.preventDefault();
    const results = await videoService.query(keyword)
    setVideos(results.items)
    setKeyword('')
    return results.items
  }

  return (
    <div className="App">
      <header>Youtube player</header>
      <form onSubmit={(ev) => loadVideos(ev)}>
        <input type="search" value={keyword} placeholder="Search" onChange={(ev) => setKeyword(ev.target.value)} />
        <button>Search</button>
      </form>
      <div className="flex">
        <VideoList videos={videos} setCurrVideo={setCurrVideo} />
        <EmbeddedVideo video={video} />
      </div>
    </div>
  );
}

export default App;
