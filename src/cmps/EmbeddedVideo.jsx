import React from 'react'
import YouTube from 'react-youtube';

export function EmbeddedVideo({ video }) {

    const opts = {
        height: '290',
        width: '440',
        playerVars: {
            autoplay: 1,
        },
    }

    const _onReady = (event) => {
        event.target.pauseVideo();
    }
    if (!video) return <div>Loading..</div>
    return (

        <div>
            <YouTube videoId={video.id.videoId} opts={opts} onReady={_onReady} />
            <h1>{video.snippet.title}</h1>
        </div >

    )
}
