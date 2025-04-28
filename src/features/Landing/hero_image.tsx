
import LOGO from '../../assets/logo.png';
import Background_Hero from "../../assets/background_hero.png";

function Heroimage() {
  



    return (
        <div className="relative w-full min-h-screen">
            <img
                className="absolute top-0 left-0 min-w-full h-full object-cover z-0"
                src={Background_Hero}
                alt="Background"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <img
                    id="hero-logo"
                    src={LOGO}
                    alt="Logo"
                    className="w-40 md:w-60 lg:w-72 h-auto mb-6 transition-all duration-300"
                />
                <button className="text-white tracking-widest font-bebas font-medium cursor-pointer py-3 px-6 md:py-4 md:px-8 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
                    Become A Member
                </button>
            </div>
        </div>
    )
}
export default Heroimage;