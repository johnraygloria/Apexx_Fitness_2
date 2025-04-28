function Facilities() {
    return (
      <div className="absolut flex justify-center flex-col min-h-screen min-w-full bg-black ">
      <div className="flex flex-col  justify-center items-center pt-5 ">
        <h1 className="text-white tracking-widest font-medium font-bebas text-4xl ">
        Our Facilities
        </h1>
        <p className="text-white text-center opacity-80  pt-3">State-of-the-art equipment and dedicated spaces for every type of workout</p>
      </div>
      <div className="grid grid-cols-1 gap-2 px-10 pt-13 sm:grid-cols-2 lg:grid-cols-6 grid-rows-6  sm:pb-26 ">
        <div className="border rounded-xl border-[#A3A3A3] col-span-1 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4 bg-[#171717] h-80"> </div>
        <div className="border rounded-xl border-[#A3A3A3] col-span-1 lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-7 bg-[#171717] h-80"> </div>
        <div className="border rounded-xl border-[#A3A3A3] col-span-1 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-4 bg-[#171717] h-80"> </div>
        <div className="border rounded-xl border-[#A3A3A3] col-span-1 lg:col-start-3 lg:col-end-5 lg:row-start-4 lg:row-end-7 bg-[#171717] h-80"> </div>
        <div className="border rounded-xl border-[#A3A3A3] col-span-1 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-4 bg-[#171717] h-80"> </div>
        <div className="border rounded-xl border-[#A3A3A3] col-span-1 lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-7 bg-[#171717] h-80"> </div>
    </div>
    </div>  
    )

}
export default Facilities;