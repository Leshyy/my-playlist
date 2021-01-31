import React from 'react'
import { VideoPreview } from './VideoPreview';

export function VideoList({ videos, setCurrVideo }) {


    return (
        <div>
            {videos.map(video => {
                return <VideoPreview key={video.id.videoId} video={video} setCurrVideo={setCurrVideo} />
            })}
        </div>
    )
}
