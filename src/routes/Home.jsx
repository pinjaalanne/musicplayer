import { useState } from "react";
import PlayerControls from "../components/PlayerControls"
import TrackList from "../components/TrackList"
import { MusicContext } from "../contexts/MusicContext"
import sinister from "../assets/sinister.mp3"
import stomp from "../assets/stomp.mp3"
import underwater from "../assets/underwater.mp3"

const Home = () => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: "Sinister",
                file: sinister
            },
            {
                name: "Stomp",
                file: stomp
            },
            {
                name: "Underwater",
                file: underwater
            }
        ],
        currentTrackIndex: 0,
        isPlaying: false,
    });

    return (
        <MusicContext.Provider value={[state, setState]}>
            <PlayerControls />
            <TrackList />
        </MusicContext.Provider>
    )
}

export default Home