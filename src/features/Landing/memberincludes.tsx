import { IconCircleCheckFilled } from "@tabler/icons-react";
import includeBG from "../../assets/includes_bg.png"

function Memberincludes() {
  const dataincludesleft = [
    { icon: IconCircleCheckFilled, name: "Unlimited use of gym", disc: "Access our facilities 24/7 with no time restrictions" },
    { icon: IconCircleCheckFilled, name: "Free Training Session", disc: "1-hour personal training with an APEXX Fitness Trainer" },
    { icon: IconCircleCheckFilled, name: "Private Lockers", disc: "Secure storage for your personal belongings" },
    { icon: IconCircleCheckFilled, name: "Showers", disc: "Clean and modern shower facilities" },
    { icon: IconCircleCheckFilled, name: "Protein Bar", disc: "Premium nutrition and supplements available" },
  ];

  const dataincludesright = [
    { icon: IconCircleCheckFilled, name: "State-of-the-Art Equipment", disc: "Train with premium American standard equipment" },
    { icon: IconCircleCheckFilled, name: "Professional Saunas", disc: "Separate facilities for men and women" },
    { icon: IconCircleCheckFilled, name: "Full Locker Rooms", disc: "Standard locker rooms with all amenities" },
    { icon: IconCircleCheckFilled, name: "Free Wi-Fi", disc: "Stay connected throughout the facility" },
    { icon: IconCircleCheckFilled, name: "APEXX FITNESS Gift", disc: "Complimentary gift upon membership signup" },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-black py-8 md:py-15">
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="relative rounded-xl ">
          <img 
            className="absolute w-full h-full object-cover" 
            src={includeBG} 
            alt="Membership includes background" 
          />
          <div className="flex flex-col py-8 md:py-15 justify-center items-center relative z-10">
            <h1 className="text-white tracking-widest font-medium font-bebas text-3xl md:text-4xl pt-6 md:pt-10">
              MEMBERSHIP INCLUDES
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center pb-8 md:pb-26 relative z-10">
            <div className="flex flex-col text-white w-full md:w-1/2">
              {dataincludesleft.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={`left-${index}`} className="flex flex-col justify-center items-start px-4 md:px-16">
                    <h1 className="flex text-white tracking-widest font-medium font-bebas text-xl md:text-2xl pt-6 md:pt-10">
                      <Icon className="mx-2 md:mx-5" size={20} /> {item.name}
                    </h1>
                    <p className="text-white text-sm md:text-base px-8 md:px-16">{item.disc}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col text-white w-full md:w-1/2">
              {dataincludesright.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={`right-${index}`} className="flex flex-col justify-center items-start px-4 md:px-16">
                    <h1 className="flex text-white tracking-widest font-medium font-bebas text-xl md:text-2xl pt-6 md:pt-10">
                      <Icon className="mx-2 md:mx-5" size={20} /> {item.name}
                    </h1>
                    <p className="text-white text-sm md:text-base px-8 md:px-16">{item.disc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memberincludes;
