import React, { useState, useEffect } from 'react'
import './VideoPersonal.css'

const VideoControls = ({
    handlePlay,
    playing,
    muted,
    handleMuted,
    loadedSeconds,
    playedSeconds,
    handleProgressTrack,
    fullscreen,
    handleFullScreen,
    handleFullScreenClose,
}) => {
    const [showElements, setShowElements] = useState(true)
    const [Btn1, setBtn1] = useState('')
    const [Btn2, setBtn2] = useState('')

    useEffect(() => {
        if (fullscreen) {
            setBtn1('displayNone')
            setBtn2('')
        }
        if (!fullscreen) {
            setBtn2('displayNone')
            setBtn1('')
        }
    }, [fullscreen])

    useEffect(() => {
        const fillBar = document.getElementById('fill')
        fillBar.style.width = `${(playedSeconds / loadedSeconds) * 100}%`
    }, [playedSeconds, loadedSeconds])
    return (
        <>
            <div
                className={
                    fullscreen
                        ? 'visibleCursor video-controls'
                        : 'video-controls'
                }
            >
                <div className="video-text">
                    <div className="casesArrow" />
                    <p>Scroll down to view details</p>
                </div>
                <div className="video-center">
                    <div
                        className={
                            showElements
                                ? 'full-progressbar'
                                : 'full-progressbar progress-bar-width'
                        }
                    >
                        <span className={'bar'}>
                            <span id="fill" className="fill"></span>
                        </span>
                        <input
                            type="range"
                            value={playedSeconds}
                            max={loadedSeconds}
                            min={0}
                            step={1}
                            className={
                                showElements
                                    ? ` inputProgress`
                                    : 'inputProgress progress-bar-width'
                            }
                            onChange={(e) =>
                                handleProgressTrack(e.target.value)
                            }
                        />
                    </div>
                    <div className="play-mute">
                        <button
                            className={
                                showElements ? `play-btn` : 'fadeIn play-btn'
                            }
                            onClick={() => handlePlay()}
                        >
                            {!playing ? 'Play' : 'Pause'}
                        </button>
                        <button
                            className={
                                showElements ? `muted-btn` : 'fadeIn muted-btn'
                            }
                            onClick={() => handleMuted()}
                        >
                            {!muted ? 'mute' : 'unmute'}
                        </button>
                        <button
                            className={
                                !fullscreen
                                    ? showElements
                                        ? ` fullscreen`
                                        : ` fadeIn fullscreen`
                                    : 'displayNone'
                            }
                            onClick={() => handleFullScreen()}
                        ></button>
                        <button
                            className={
                                fullscreen
                                    ? showElements
                                        ? ` fullscreen-rev`
                                        : ` fadeIn fullscreen-rev`
                                    : 'displayNone'
                            }
                            onClick={() => handleFullScreenClose()}
                        ></button>
                    </div>
                </div>
                <div
                    className="hide-controls"
                    onClick={() => setShowElements(!showElements)}
                >
                    Hide elements
                </div>
            </div>
        </>
    )
}

export default VideoControls
