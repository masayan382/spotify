import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react"
function Center () {
    const { data: session } = useSession()
    return (
        <div className="flex flex-grow text-white ">
            <header>
                <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cousor-pointer rounded-full p-1 pr-2">
                    <img className="rounded-full w-190 h-10" src={session?.user.image} alt="" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </header>
            <section>
                {/* <img src="" alt="" /> */}
            </section>
        </div>
    )
}

export default Center
