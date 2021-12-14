import React from 'react'
import './VideoPersonal.css'

const VideoControls = ({
    handlePlay,
    playing,
    muted,
    handleMuted,
    loadedSeconds,
    playedSeconds,
    handleProgressTrack,
}) => {
    return (
        <>
            <div className="video-controls">
                <div className="video-text">
                    <div className="casesArrow" />
                    <p>Scroll down to view details</p>
                </div>
                <div className="video-center">
                    <input
                        type="range"
                        value={playedSeconds}
                        max={loadedSeconds}
                        min={0}
                        step={1}
                        onChange={(e) => handleProgressTrack(e.target.value)}
                    />
                    <div className="play-mute">
                        <button
                            className="play-btn"
                            onClick={() => handlePlay()}
                        >
                            {!playing ? 'Play' : 'Pause'}
                        </button>
                        <button
                            className="muted-btn"
                            onClick={() => handleMuted()}
                        >
                            {!muted ? 'mute' : 'unmute'}
                        </button>
                    </div>
                </div>
                <div className="hide-controls">Hide elements</div>
            </div>
        </>
    )
}

export default VideoControls
