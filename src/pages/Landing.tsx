import Heroimage from "../features/Landing/hero_image"
import Bodysection from "../features/Landing/bodysection"
import Membership from "../features/Landing/membership";
import Facilities from "../features/Landing/faciities"
import Memberincludes from "../features/Landing/memberincludes"
import QRcode from "../features/Landing/qrcode"
import Startfitness from "../features/Landing/startfitness"
function Landing() {
 return (
 <>
   <Heroimage/>
   <Bodysection/>
   <Membership/>
   <Facilities/>
   <Memberincludes/>
   <QRcode/>
   <Startfitness/>
 </>
 ) 
}
export default Landing;