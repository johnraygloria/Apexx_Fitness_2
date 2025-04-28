import start from "../../assets/start_fitness.png"
function Startfitness () {
  return(
      
<div className="absolut flex justify-center flex-col min-h-screen min-w-full bg-black">
  <img className="absolute" src={start} alt="" />
<div className="flex flex-col justify-center items-center">
  <h1 className="text-white tracking-widest font-medium font-bebas text-4xl  md:flex md:items-center z-2">
  START YOUR FITNESS JOURNEY TODAY
  </h1>
<p className="text-white text-center opacity-80 max-w-lg pt-8 pb-8">
Join APEXX FITNESS and transform your body, mind, and lifestyle with our premium facilities and expert guidance.
  </p>
  <button className="z-2 text-white tracking-widest font-bebas font-medium cursor-pointer py-3 px-6 md:py-4 md:px-8 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
    Become A Member
  </button>
</div>
</div>
)
}
export default Startfitness;