import intmob from "../assets/images/image-interactive-mobile.jpg";
import intdesk from "../assets/images/image-interactive.jpg";

function VR() {
  return (
    <div id="vr" className="m-auto my-20 sm:relative">
        <picture className="">
            <source media="(max-width: 640px)" srcSet={intmob} />
            <source media="(min-width: 640px)" srcSet={intdesk} />
            <img src="" alt="" />
        </picture>
        <div className="px-3 py-10 bg-white lg:w-6/12 lg:absolute lg:right-0 lg:-bottom-28 lg:p-28 lg:pr-0">
            <h2 className="font-fontJosefin text-3xl lg:text-5xl lg:text-start text-veryDarkGray font-bold text-center uppercase py-3">
                The leader in interactive VR
            </h2>
            <p className="font-fontAlata text-center lg:text-start text-darkGray">
                Founded in 2011, Loopstudios has been producing
                world-class virtual reality projects for some of the
                best companies around the globe. Our award-winning
                creations have transformed businesses through
                digital experiences that bind to their brand.
            </p>
        </div>
    </div>
  )
}

// False positive warning, https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/25
// eslint-disable-next-line react-refresh/only-export-components
export default VR