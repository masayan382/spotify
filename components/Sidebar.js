import {
    HomeIcon,
    MagnifyingGlassIcon,
    BuildingLibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from "@heroicons/react/24/outline"
function Sidebar() {
    return (
        <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon class="h-5 w-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <MagnifyingGlassIcon class="h-5 w-5" />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <BuildingLibraryIcon class="h-5 w-5" />
                    <p>Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                {/*  */}
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon class="h-5 w-5" />
                    <p>Create PlayList</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon class="h-5 w-5" />
                    <p>Liked Songs</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon class="h-5 w-5" />
                    <p>Your episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                {/* playlists... */}
            </div>
        </div>
    )
}

export default Sidebar
