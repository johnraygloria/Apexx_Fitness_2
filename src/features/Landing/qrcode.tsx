function QRcode () {
    return(
        
<div className="absolut flex justify-center flex-col min-h-screen min-w-full bg-black">
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-white tracking-widest font-medium font-bebas text-4xl  md:flex md:items-center">
      GET YOUR GYM ACCESS QR
    </h1>
  <p className="text-white text-center opacity-80 max-w-lg pt-8 pb-8">
  Generate your personal QR code for seamless gym entry. Simply scan this QR code at our entrance for quick access.
    </p>
    <button className="text-white tracking-widest font-bebas font-medium cursor-pointer py-3 px-6 md:py-4 md:px-8 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
      Become A Member
    </button>
  </div>
</div>
  )
}
export default QRcode;