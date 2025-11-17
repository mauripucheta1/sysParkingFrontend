import { useState } from "react";
import { Lock } from "lucide-react";

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (

        <div className="h-screen w-full bg-[#F4F7FB] flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <div className="w-full flex flex-col items-center mb-8">

                    <div className="w-20 h-20 bg-[#004DA4]/10 rounded-full flex items-center justify-center">
                        <img src="/favicon.png" alt="Logo SysParking" className="w-full h-full rounded-full" />
                    </div>

                    <h1 className="text-2xl font-bold text-[#004DA4] mt-4">Reset Password</h1>

                    <p className="text-gray-600 text-sm text-center">
                        Create your new password below.
                    </p>

                </div>

                <form className="flex flex-col gap-6">

                    {/* New Password */}
                    <div className="flex flex-col gap-1">

                        <label className="font-medium text-sm text-[#004DA4]">New Password</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <Lock className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input type="password" className="w-full outline-none text-gray-700" placeholder="•••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-1">

                        <label className="font-medium text-sm text-[#004DA4]">Confirm Password</label>

                        <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                            <Lock className="text-[#004DA4] w-5 h-5 mr-2" />

                            <input type="password" className="w-full outline-none text-gray-700" placeholder="•••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        </div>

                    </div>

                    <button type="submit" className="w-full bg-[#00A46D] text-white font-semibold py-2 rounded-xl hover:bg-[#008F5F] transition-all hover:cursor-pointer">
                        Reset Password
                    </button>

                </form>

                <div className="mt-6 flex flex-col items-center gap-2">

                    <a href="/login" className="text-sm text-[#004DA4] hover:underline">
                        Back to Login
                    </a>

                </div>

            </div>

        </div>

    )

};

export default ResetPassword;