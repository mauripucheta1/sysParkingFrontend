import { useState } from "react";
import { User, IdCard, Cake, Phone, Mail, Lock } from "lucide-react";

const Register = () => {

    const [namePerson, setNamePerson] = useState("");
    const [lastNamePerson, setLastNamePerson] = useState("");
    const [nid, setNid] = useState(0);
    const [age, setAge] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [capsLockOn, setCapsLockOn] = useState(false);

    return (

        <div className="h-screen w-full bg-[#F4F7FB] flex items-center justify-center px-7 md:px-4">

            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">

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

                    <span className="text-[#004DA4] text-sm md:hidden mt-2">Scroll to end</span>

                </div>

                <form className="flex flex-col md:flex-row gap-3 md:gap-8 max-h-[450px] overflow-y-scroll md:overflow-y-auto scrollbar-thin md:scrollbar-none scrollbar-thumb-gray-400 md:scrollbar-thumb-transparent scrollbar-track-gray-200 md:scrollbar-track-transparent" id="formRegister">

                    {/* Col 1 */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">

                        {/* Name */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Name</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                                <User className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="text" className="w-full outline-none text-gray-700" placeholder="Mauricio" value={namePerson} onChange={(e) => setNamePerson(e.target.value)} />

                            </div>

                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Last Name</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                                <User className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="text" className="w-full outline-none text-gray-700" placeholder="Pucheta" value={lastNamePerson} onChange={(e) => setLastNamePerson(e.target.value)} />

                            </div>

                        </div>

                        {/* NID */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">National Identity Document</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                                <IdCard className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="number" className="w-full outline-none text-gray-700" placeholder="44111333" value={nid} onChange={(e) => setNid(Number(e.target.value))} />

                            </div>

                        </div>

                        {/* Age */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Age</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                                <Cake className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="number" className="w-full outline-none text-gray-700" placeholder="21" value={age} onChange={(e) => setAge(Number(e.target.value))} />

                            </div>

                        </div>

                    </div>

                    {/* Col 2*/}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">

                        {/* Phone number */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Phone Number</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                                <Phone className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="phone" className="w-full outline-none text-gray-700" placeholder="Pucheta" value={phoneNumber} onChange={(e) => setPhoneNumber(Number(e.target.value))} />

                            </div>

                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Email</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white">

                                <Mail className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="email" className="w-full outline-none text-gray-700" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />

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
                                <span className="absolute -bottom-7 left-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-md font-medium shadow-sm">
                                    CAPS LOCK ACTIVATED
                                </span>
                            )}

                        </div>

                    </div>

                </form>

                <div className="w-full h-auto flex flex-col items-center gap-2 justify-center mt-5">

                    <button type="submit" form="formRegister" className="w-[250px] bg-[#00A46D] text-white font-semibold py-2 rounded-xl hover:bg-[#00895B] transition-all hover:cursor-pointer">
                        Register
                    </button>

                    <span className="text-sm text-red-500 hidden">Complete the red fields</span>

                </div>

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