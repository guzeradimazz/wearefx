import React, { useState } from 'react'
import './VideoPersonal.css'

const VideoControls = ({
    handlePlay,
    playing,
    muted,
    handleMuted,
    loadedSeconds,
    playedSeconds,
    handleProgressTrack,
    handleFullScreen,
}) => {
    const [showElements, setShowElements] = useState(true)
    return (
        <>
            <div className="video-controls">
                <div className="video-text">
                    <div className="casesArrow" />
                    <p>Scroll down to view details</p>
                </div>
                <div className="video-center">
                    <div className="full-progressbar">
                        <input
                            type="range"
                            value={playedSeconds}
                            max={loadedSeconds}
                            min={0}
                            step={1}
                            className={
                                showElements ? ` ` : 'progress-bar-width'
                            }
                            onChange={(e) =>
                                handleProgressTrack(e.target.value)
                            }
                        />
                        <progress
                            className={
                                showElements ? ` ` : 'progress-bar-width'
                            }
                            value={playedSeconds}
                            max={loadedSeconds}
                        ></progress>
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
                                showElements
                                    ? `fullscreen`
                                    : 'fadeIn fullscreen'
                            }
                            onClick={() => handleFullScreen()}
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
