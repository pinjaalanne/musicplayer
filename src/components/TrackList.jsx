"use client";

import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = () => {
    const music = useMusicPlayer()

    return (
        <div>
            {music.trackList.map((track, index) => {
                return (
                    <div key={`${track.name}_${index}`}>
                        <div className="trackName">Track: {track.name}</div>
                        <button>
                            {music.isPlaying && music.currentTrackIndex === index ?
                                <PauseFill />
                                :
                                <PlayFill />
                            }
                        </button>
                    </div>
                )
            })}
        </div>
    )


}

export default TrackList;