import { useState } from "react";
import { Mail, Lock } from "lucide-react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [capsLockOn, setCapsLockOn] = useState(false);

    return (

        <div className="h-screen w-full bg-[#F4F7FB] flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <div className="w-full flex flex-col items-center mb-8">

                    <div className="w-20 h-20 bg-[#004DA4]/10 rounded-full flex items-center justify-center">

                        <img src="/favicon.png" alt="Logo SysParking" className="w-full h-full rounded-full" />

                    </div>

                    <h1 className="text-2xl font-bold text-[#004DA4] mt-4">
                        Welcome Back
                    </h1>

                    <p className="text-gray-600 text-sm">Sign in to your account</p>

                </div>

                <form className="flex flex-col gap-6">
                    
                    {/* Email */}
                    <div className="flex flex-col gap-1">

                        <label className="font-medium text-sm text-[#004DA4]">Email</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <Mail className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input type="email" className="w-full outline-none text-gray-700" placeholder="your@email.com" value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1 relative">

                        <label className="font-medium text-sm text-[#004DA4]">Password</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <Lock className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input type="password" className="w-full outline-none text-gray-700" placeholder="•••••••••" value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                onKeyUp={(e) => setCapsLockOn(e.getModifierState("CapsLock"))}
                            />

                        </div>

                        {capsLockOn && (
                            <span className="absolute -top-1 right-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-md font-medium shadow-sm">
                                CAPS LOCK ACTIVATED
                            </span>
                        )}

                    </div>

                    <button type="submit" className="w-full bg-[#004DA4] text-white font-semibold py-2 rounded-xl hover:bg-[#003A7D] transition-all hover:cursor-pointer">
                        Login
                    </button>

                </form>

                <div className="mt-6 flex flex-col items-center gap-2">

                    <a href="/forgot-password" className="text-sm text-[#004DA4] hover:underline">
                        Forgot password?
                    </a>

                    <a href="/register" className="text-sm text-[#A4004D] font-semibold hover:underline">
                        Don’t have an account? Create one
                    </a>

                </div>

            </div>

        </div>

    )

};

export default Login;