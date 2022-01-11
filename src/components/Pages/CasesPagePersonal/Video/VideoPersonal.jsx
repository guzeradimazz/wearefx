import React, { useState, useEffect, useCallback } from 'react'
import './VideoPersonal.css'
import ReactPlayer from 'react-player'
import Video from './VideoSrc/videoPower.mp4'
import VideoControls from './VideoControls'

export const VideoPersonal = ({
    refPlayer,
    refPlayerScreenfull,
    fullscreen,
    setFullscreen,
}) => {
    const [videoState, setVideoState] = useState({
        playing: false,
        muted: false,
        loadedSeconds: 1,
        playedSeconds: 0,
    })

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
    const handleFullScreen = () => {
        setFullscreen(true)

        if (refPlayerScreenfull.current.requestFullscreen)
            refPlayerScreenfull.current.requestFullscreen()
        else if (refPlayerScreenfull.current.webkitRequestFullscreen)
            /* Safari */ refPlayerScreenfull.current.webkitRequestFullscreen()
        else if (refPlayerScreenfull.current.msRequestFullscreen)
            /* IE11 */ refPlayerScreenfull.current.msRequestFullscreen()
    }
    const handleFullScreenClose = () => {
        setFullscreen(false)

        if (document.exitFullscreen) document.exitFullscreen()
        else if (document.webkitExitFullscreen)
            /* Safari */ document.webkitExitFullscreen()
        else if (document.msExitFullscreen)
            /* IE11 */ document.msExitFullscreen()
    }

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setFullscreen(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        }
    }, [])

    return (
        <div
            id="player"
            ref={refPlayerScreenfull}
            className={
                fullscreen ? 'visibleCursor video-object' : 'video-object'
            }
        >
            <div
                className={
                    fullscreen ? 'visibleCursor video-toner' : 'video-toner'
                }
            />
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
                fullscreen={fullscreen}
                handleMuted={handleMuted}
                loadedSeconds={loadedSeconds}
                playedSeconds={playedSeconds}
                handleProgressTrack={handleProgressTrack}
                handleFullScreen={handleFullScreen}
                handleFullScreenClose={handleFullScreenClose}
            />
        </div>
    )
}
