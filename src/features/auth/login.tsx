import { IconX, IconLock, IconUser } from "@tabler/icons-react"
import LOGO from "../../assets/logo.png"

import { useLoginForm } from "./hooks/useLoginForm"
interface LoginPropModal {
    onClose: () => void
}

export const Login = ({onClose}: LoginPropModal) => {
    const  {
        formData,
        errors,
        handleChange,
        handleSubmit
    } = useLoginForm();
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-50">
            <div className="bg-black border rounded-3xl border-gray-800  p-7 py-12 rounded- w-full max-w-md">
                <div className="flex justify-end mb-2 ">
                    <button onClick={onClose}
                    className="flex justify-end cursor-pointer ">
                        <IconX size={25} className="bg-white  rounded-full "
                        color="black"/>
                    </button>
                </div>
                <img className="w-28 h-28 mx-auto "
                    src={LOGO}
                    alt="logo"
                 />
                    <h1 className="text-center tracking-widest font-medium font-bebas text-3xl mb-2">
                        Login to your Account
                    </h1>
                        <p className="text-center text-gray-400 mb-3 text-xs tracking-widest font-medium font-bebas">
                            One Step Closer to the Stronger You
                        </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="username">
                        Username
                    </label>

                    <div className="relative">
                        <IconUser 
                        color="white" 
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70"
                        size={18}
                        />
                            <input 
                            className={`relative border ${errors.username ? 'border-red-500' : 'border-gray-600'} p-3 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            />
                    </div>

                        {errors.username && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.username}</p>
                        )}
                </div>
                        <div className="flex justify-end">
                            <button className="text-sm cursor-pointer text-gray-400 hover:text-white">
                                Forgot Password?
                            </button>
                        </div>   
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <IconLock 
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-70 "
                                    size={18}
                                />
                                <input
                                    id="password"
                                    className={`relative border ${errors.password ? 'border-red-500' : 'border-gray-600'} p-3 pl-12 rounded-md w-full bg-transparent border-2 text-white focus:outline-none focus:border-white transition-colors`}
                                    type="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.password}</p>
                            )}
                        </div>
                        
                        <button 
                            type="submit"
                            className="cursor-pointer bg-white text-black w-full p-3 rounded-md font-bold hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 mb-5"
                        >
                            Login to your Account
                        </button>

                        <div className="flex justify-center items-center text-sm">
                            <h1 className="text-gray-400 ">Not a member yet? 
                                 <span
                                  className="p-1 text-red-500 cursor-pointer">
                                    Register Now
                                </span>
                            </h1>
                        </div>
            </form>        
            </div>
        </div>
    )
}