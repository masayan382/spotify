import { useSession } from "next-auth/react"
import { signIn, useEffect } from "react"
import spotifyApi from "../lib/spotify"

function useSpotify () {
    const { data: session, status } = useSession()

    useEffect(() => {
        if (session) {
            if (session.error === 'RefreshAccessTokenError') {
                signIn()
            }
            spotifyApi.setAccessToken(session.user.setAccessToken)
        }
    }, [session])
    return spotifyApi
}

export default useSpotify
