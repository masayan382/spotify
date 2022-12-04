import { useSession } from "next-auth/react"
import useSpotify from "../hooks/useSpotify"
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from "react"
import { useSonginfo } from "../hooks/useSonginfo"
import { ArrowsRightLeftIcon, ArrowUturnLeftIcon, BackwardIcon, ForwardIcon, SpeakerWaveIcon, PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid"
import { SpeakerXMarkIcon } from "@heroicons/react/24/outline"

function Player () {
    const spotifyApi = useSpotify()
    const { data: session, status } = useSession()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)
    const songInfo = useSonginfo()

    const fetchCurrentSong = () => {
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then(data => {
                setCurrentTrackId(data.body?.item?.id)
            })
            spotifyApi.getMyCurrentPlaybackState().then((data) => {
                setIsPlaying(data.body?.is_playing)
            })
        }
    }
    const handlePlayPause = () => {
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
            if (data.body.is_playing) {
                spotifyApi.pause()
                setIsPlaying(false)
            } else {
                spotifyApi.play()
                setIsPlaying(true)
            }
        })
    }


    useEffect(() => {
        if (spotifyApi.getAccessToken() && !currentTrackId) {
            fetchCurrentSong()
            setVolume(50)
        }
    }, [currentTrackIdState, spotifyApi, session])
    return (
        <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
            {/* left */}
            <div className="flex items-center space-x-4">
                <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt="" />
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>
            {/* center */}
            <div className="flex items-center justify-evenly">
                <ArrowsRightLeftIcon className="button" />
                <BackwardIcon className="button" />
                {isPlaying ? (<PauseCircleIcon onClick={handlePlayPause} className="button w-10 h-10" />)
                    : (<PlayCircleIcon onClick={handlePlayPause} className="button w-10 h-10" />)}
                <ForwardIcon className="button" />
                <ArrowUturnLeftIcon className="button" />
                <SpeakerXMarkIcon className="button" />
                <SpeakerWaveIcon className="button" />
            </div>
        </div>
    )
}

export default Player
