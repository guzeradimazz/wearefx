import React, { useState, useRef } from 'react'
import './VideoPersonal.css'
import ReactPlayer from 'react-player'
import Video from './VideoSrc/videoPower.mp4'
import VideoControls from './VideoControls'

export const VideoPersonal = () => {
    const [videoState, setVideoState] = useState({
        playing: false,
        muted: false,
        loadedSeconds: 1,
        playedSeconds: 0,
    })

    const refPlayer = useRef()
    const { playing, muted, loadedSeconds, playedSeconds } = videoState
    const handlePlay = () => {
        setVideoState({ ...videoState, playing: !videoState.playing })
    }
    const handleMuted = () => {
        setVideoState({ ...videoState, muted: !videoState.muted })
    }
    const handleProgress = (e) => {
        setVideoState({ ...videoState, ...e })
    }
    const handleProgressTrack = (e) => {
        refPlayer.current.seekTo(Number(e))
    }
    return (
        <div className="video-object">
            <div className="video-toner" />
            <ReactPlayer
                className="video-video"
                width={'100vw'}
                height={'100vh'}
                playing={playing}
                url={Video}
                muted={muted}
                ref={refPlayer}
                onProgress={handleProgress}
            />
            <VideoControls
                playing={playing}
                handlePlay={handlePlay}
                muted={muted}
                handleMuted={handleMuted}
                loadedSeconds={loadedSeconds}
                playedSeconds={playedSeconds}
                handleProgressTrack={handleProgressTrack}
            />
        </div>
    )
}
