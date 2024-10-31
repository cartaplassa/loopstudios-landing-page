/* eslint-disable react/prop-types */
import setBackground from "../utils/setBackground"

function Creation({name, bg}) {
    return (
        <div 
            className="bg-[image:var(--mobile-bg)] sm:bg-[image:var(--desktop-bg)] bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative"
            style={setBackground(bg)}
        >
            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                {name}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
        </div>
    )
}

const creations = {
    "Deep Earth": "image-deep-earth",
    "Night arcade": "image-night-arcade",
    "Soccer team VR": "image-soccer-team",
    "The grid": "image-grid",
    "From up above VR": "image-from-above",
    "Pocket borealis": "image-pocket-borealis",
    "The curiosity": "image-curiosity",
    "Make it fisheye": "image-fisheye"
}

function Creations() {
    return (
        <div
            id="creations"
            className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
            <h2 className="text-3xl text-center sm:text-start font-bold text-veryDarkGray uppercase font-fontJosefin py-5 sm:row-start-1">
                our creations
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2 md:grid-cols-4">
                {Object.keys(creations).map(el=><Creation name={el} bg={creations[el]} key={el} />)}
            </div>
            <button className="ring-1 hover:bg-black hover:text-white uppercase font-fontAlata tracking-[0.3rem] text-sm sm:mr-0 px-10 py-3 ring-black m-auto my-3 sm:row-start-1">
                See all
            </button>
        </div>
    )
}

export default Creations