import useSpotify from "./useSpotify"
import { currentTrackIdState } from '../atoms/songAtom'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from "react"
import spotifyApi from "../lib/spotify"

export function useSonginfo () {
    const sptifyApi = useSpotify()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [songInfo, setSonginfo] = useState(null)

    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentTrackId) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/${currentTrackId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                        }
                    }
                )

            }
        }

    }, [currentTrackId, sptifyApi])

    return songInfo
}