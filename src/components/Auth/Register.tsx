import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

const Register = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="h-screen w-full bg-[#F4F7FB] flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <div className="w-full flex flex-col items-center mb-8">

                    <div className="w-20 h-20 bg-[#004DA4]/10 rounded-full flex items-center justify-center">
                        <img
                            src="/favicon.png"
                            alt="Logo SysParking"
                            className="w-full h-full rounded-full"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-[#004DA4] mt-4">
                        Create your account
                    </h1>

                    <p className="text-gray-600 text-sm">
                        Fill the form to get started
                    </p>

                </div>

                <form className="flex flex-col gap-6">
                    
                    {/* Full Name */}
                    <div className="flex flex-col gap-1">

                        <label className="font-medium text-sm text-[#004DA4]">Full Name</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <User className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input
                                type="text"
                                className="w-full outline-none text-gray-700"
                                placeholder="John Doe"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />

                        </div>

                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">

                        <label className="font-medium text-sm text-[#004DA4]">Email</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <Mail className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input
                                type="email"
                                className="w-full outline-none text-gray-700"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1">

                        <label className="font-medium text-sm text-[#004DA4]">Password</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <Lock className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input
                                type="password"
                                className="w-full outline-none text-gray-700"
                                placeholder="•••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                    </div>

                    <button type="submit" className="w-full bg-[#00A46D] text-white font-semibold py-2 rounded-xl hover:bg-[#00895B] transition-all hover:cursor-pointer">
                        Register
                    </button>

                </form>

                <div className="mt-6 flex flex-col items-center gap-2">

                    <a href="/login" className="text-sm text-[#004DA4] hover:underline">
                        Already have an account? Login
                    </a>

                    <a href="/" className="text-sm text-[#A4004D] font-semibold hover:underline">
                        Back to Home
                    </a>

                </div>

            </div>

        </div>

    )

};

export default Register;