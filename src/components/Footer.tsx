
import { IconBrandFacebook, IconBrandInstagram, IconMapPin, IconPhone, IconBrandGmail } from "@tabler/icons-react";
import LOGO from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={LOGO} alt="Apexx Fitness" className="h-16" />
            </div>
            <p className="text-sm">
              Your journey to a healthier lifestyle starts here. Join our community and transform your life today.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a className="hover:text-gray-300">Home</a></li>
              <li><a className="hover:text-gray-300">About Us</a></li>
              <li><a className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Membership</h3>
            <ul className="space-y-2">
              <li><a  className="hover:text-gray-300">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Membership</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <IconMapPin className="w-5 h-5 mt-1" />
              </div>
              <div className="flex items-center space-x-2">
                <IconPhone className="w-5 h-5" />
                <a href="tel:(047) 222 3773" className="text-sm hover:text-gray-300">(047) 222 3773</a>
              </div>
              <div className="flex items-center space-x-2">
                <IconBrandGmail className="w-5 h-5" />
                <a href="mailto:email@gmail.com" className="text-sm hover:text-gray-300">email@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm  text-gray-400">© 2025 APEXX FITNESS. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                <IconBrandFacebook className="w-6 h-6" />
              </a>
              <a className="hover:text-gray-300">
                <IconBrandInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;