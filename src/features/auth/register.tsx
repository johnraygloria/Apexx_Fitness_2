import { IconX } from "@tabler/icons-react"
import {useRegisterForm} from "./hooks/useRegisterForm"
import { IconLock, IconUser, IconBrandGmail, IconPhone, IconCalendar,IconHeartHandshake,  } from "@tabler/icons-react"
import LOGO from "../../assets/logo.png"

interface RegisterPropModal {
    onClose: () => void
}

export const Register = ({onClose}: RegisterPropModal) => {
    const  {
        registerForm,
        errorsRegisterForm,
        handleChangeRegisterForm,
        handleSubmitRegisterForm
    } =useRegisterForm();
    
    return(
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-50">
        <div className="bg-black border rounded-3xl border-gray-800 p-12 w-full max-w-3xl flex flex-col">
            <div className="flex justify-end">
                <button onClick={onClose}
                className="flex justify-end cursor-pointer">
                    <IconX size={22} className="bg-white rounded-full"
                    color="black"/>
                </button>
            </div>

            <div className="flex-shrink-0">
                <img className="w-28 h-28 mx-auto mb-1"
                    src={LOGO}
                    alt="logo"
                />
        
                <h1 className="text-center tracking-widest font-medium font-bebas text-2xl">
                    Create your apexX fitness account
                </h1>
                <p className="text-center text-gray-400 mb-2 text-xs tracking-widest font-medium font-bebas">
                    Join our community and start your fitness journey today
                </p>
            </div>
            
            <h1 className="py-2 text-lg font-bold">Personal Details</h1>

                <form onSubmit={handleSubmitRegisterForm} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    
                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium">
                            First Name
                        </label>
                        <div className="relative">
                            <IconUser 
                                color="white" 
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input 
                                className={`relative border ${errorsRegisterForm.first_name ? 'border-red-500' : 'border-gray-600'}
                                p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="first_name"
                                type="text"
                                placeholder="Enter your first name"
                                value={registerForm.first_name}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.first_name && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.first_name}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className="block mb-1 text-sm font-medium">Last Name</label>
                        <div className="relative">
                            <IconUser 
                                color="white" 
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input 
                                className={`relative border ${errorsRegisterForm.last_name ? 'border-red-500' : 'border-gray-600'} p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="last_name"
                                type="text"
                                placeholder="Enter your last name"
                                value={registerForm.last_name}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.last_name && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.last_name}</p>
                        )}
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label className="block mb-1 text-sm font-medium" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <IconBrandGmail 
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input
                                id="email"
                                className={`relative border ${errorsRegisterForm.email ? 'border-red-500' : 'border-gray-600'} p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                type="email"
                                placeholder="you@example.com"
                                value={registerForm.email}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.email && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.email}</p>
                        )}
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium" htmlFor="phone">
                            Phone Number
                        </label>
                        <div className="relative">
                            <IconPhone
                                color="white" 
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input 
                                className={`relative border ${errorsRegisterForm.phone ? 'border-red-500' : 'border-gray-600'} p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="phone"
                                type="number"
                                placeholder="+63 (555) 123 4567"
                                value={registerForm.phone}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.phone && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.phone}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium" htmlFor="date">Date of Birth</label>
                        <div className="relative">
                            <IconCalendar
                                color="white" 
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input 
                                className={`relative border ${errorsRegisterForm.date_birth ? 'border-red-500' : 'border-gray-600'} p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="date"
                                type="date"
                                placeholder="dd/mm/yy"
                                value={registerForm.date_birth}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.date_birth && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.date_birth}</p>
                        )}
                    </div>
                    
                    <div className="flex flex-col md:col-span-2">
                        <label className="block mb-1 text-sm font-medium">
                            Gender
                        </label>
                        <div className="flex items-center gap-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={registerForm.gender === "male"}
                                    onChange={handleChangeRegisterForm}
                                    className="form-radio text-white bg-gray-800 border-gray-600 focus:ring-white"
                                />
                                <span className="ml-2 text-white">Male</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={registerForm.gender === "female"}
                                    onChange={handleChangeRegisterForm}
                                    className="form-radio text-white bg-gray-800 border-gray-600 focus:ring-white"
                                />
                                <span className="ml-2 text-white">Female</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={registerForm.gender === "other"}
                                    onChange={handleChangeRegisterForm}
                                    className="form-radio text-white bg-gray-800 border-gray-600 focus:ring-white"
                                />
                                <span className="ml-2 text-white">Other</span>
                            </label>
                        </div>
                        {errorsRegisterForm.gender && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.gender}</p>
                        )}
                    </div>
                    
                    <h1 className="py-2 text-lg font-bold md:col-span-2">Emergency Contact</h1>
                    
                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium">
                            Contact Name
                        </label>
                        <div className="relative">
                            <IconPhone
                                color="white"
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input
                                className={`relative border ${errorsRegisterForm.contact_name? 'border-red-500' : 'border-gray-600'}
                                p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="contact_name"
                                type="text"
                                placeholder="Enter your contact name"
                                value={registerForm.contact_name}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.contact_name && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.contact_name}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium" htmlFor="relationship">Relationship</label>
                        <div className="relative">
                            <IconHeartHandshake
                                color="white"
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input
                                className={`relative border ${errorsRegisterForm.relationship? 'border-red-500' : 'border-gray-600'} p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="relationship"
                                type="text"
                                placeholder="Enter your relationship"
                                value={registerForm.relationship}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.relationship && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.relationship}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <IconLock
                                color="white"
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input
                                className={`relative border ${errorsRegisterForm.password? 'border-red-500' : 'border-gray-600'}
                                p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={registerForm.password}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.password && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.password}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-1 text-sm font-medium" htmlFor="password_confirmation">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <IconLock
                                color="white"
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                                size={16}
                            />
                            <input
                                className={`relative border ${errorsRegisterForm.password_confirmation? 'border-red-500' : 'border-gray-600'}
                                p-2 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                id="password_confirmation"
                                type="password"
                                placeholder="Confirm your password"
                                value={registerForm.password_confirmation}
                                onChange={handleChangeRegisterForm}
                            />
                        </div>
                        {errorsRegisterForm.password_confirmation && (
                            <p className="text-red-500 text-xs mt-1">{errorsRegisterForm.password_confirmation}</p>
                        )}
                    </div>

                    <div className="md:col-span-2 mt-2">
                        <button 
                            type="submit"
                            className="cursor-pointer bg-white text-black w-full p-2.5 rounded-md font-bold hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 mb-3"
                        >
                            Create your Account
                        </button>

                        <div className="flex justify-center items-center text-xs">
                            <h1 className="text-gray-400">Already have an account? 
                                <span className="p-1 text-red-500 cursor-pointer">
                                    Sign In
                                </span>
                            </h1>
                        </div>
                    </div>
                </form>
        </div>
    </div>
    )
}