function Membership () {
    return(
      <div className="absolut flex justify-center flex-col min-h-screen min-w-full bg-black">
      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-white tracking-widest font-medium font-bebas text-4xl">
        Membership Plans
        </h1>
        <p className="text-white text-center opacity-80 max-w-lg pt-3">Choose the plan that fits your lifestyle and fitness goals.</p>
      </div>
      <div className="flex flex-wrap justify-center  gap-7 pt-13">
        <div className="border bg-[#171717] rounded-xl border-[#A3A3A3] h-100 w-80 "></div>
        <div className="border bg-[#171717] rounded-xl border-[#A3A3A3] h-100 w-80 "></div>
        <div className="border bg-[#171717] rounded-xl border-[#A3A3A3] h-100 w-80 "></div>
      </div>
    </div>
    )
  }
  export default Membership;