import useSpotify from "../hooks/useSpotify"
import { millisToMinutesAndSeconds } from "../lib/time"


function Song (order, track) {
    const spotifyApi = useSpotify()
    // console.log('track: ', track);
    // console.log('order: ', order);

    return (
        <div className="grid grid-cols-2">
            <div className="flex items-center space-x-4">
                <p>{order + 1}</p>
                <img className="" src={order.track.track.album.images[0].url} alt="" />
                <div>
                    {/* <p>{track.track.name}</p>
                    <p>{track.track.artist[0].name}</p> */}
                    <p></p>
                </div>
            </div>

            <div className="flex items-center justify-between ml-auto md:ml-0">
                {/* <p className="hidden md:inline">{track.track.album.name}</p>
                <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p> */}
            </div>
        </div>
    )
}

export default Song

