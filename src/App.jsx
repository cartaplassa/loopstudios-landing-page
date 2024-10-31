import Heading from "./blocks/Heading";
import VR from "./blocks/VR";
import Creations from "./blocks/Creations";
import Footer from "./blocks/Footer";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <div className="m-auto min-h-screen relative">
            {/* heading */}
            <Heading />
            {/* main */}
            <main className="p-5 md:px-32 py-24 m-auto max-w-[1440px]">
                <VR />
                <Creations />
            </main>
            {/* footer */}
            <Footer />
        </div>
    );
}

export default App;
