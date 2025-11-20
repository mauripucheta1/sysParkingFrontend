import { useState } from "react";
import { User, IdCard, Cake, Phone, Mail, Lock } from "lucide-react";
import Swal from "sweetalert2";

const Register = () => {

    const [namePerson, setNamePerson] = useState("");
    const [lastNamePerson, setLastNamePerson] = useState("");
    const [nid, setNid] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [phoneNumber, setPhoneNumber] = useState<number>(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [capsLockOn, setCapsLockOn] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault(); 

        try {

            const response = await fetch("http://localhost:4000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: namePerson,
                    lastName: lastNamePerson,
                    nid,
                    age,
                    phoneNumber,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {

                document.querySelectorAll("#formRegister div[id]").forEach((input) => {
                    input.classList.remove("border-red-500");
                    input.classList.add("border-gray-500");
                });

                if (data.message?.startsWith("Missing required fields:")) {

                    const raw = data.message.replace("Missing required fields:", "").trim();
                    const missing = raw.split(",").map((field: string) => field.trim());

                    const newErrors: Record<string, string> = {};

                    missing.forEach((field: string) => {
                        const el = document.getElementById(field);
                        if (el) {
                            el.classList.add("border-red-500");
                            el.classList.remove("border-gray-500");
                        }
                        newErrors[field] = "This field is required.";
                    });

                    setFieldErrors(newErrors);

                    return; 

                };

                if (data.errors) {
                    setFieldErrors(data.errors);
                    return;
                };

                setFieldErrors({});
                return;

            };

            document.querySelectorAll("#formRegister div[id]").forEach((input) => {
                input.classList.remove("border-red-500");
                input.classList.add("border-green-500");
            });

            document.querySelectorAll("#formRegister span").forEach((span) => {
                span.classList.add("hidden");
            });

            setFieldErrors({});

            Swal.fire({
                icon: "success",
                toast: true,
                position: 'top-end',
                title: "User registered successfully!",
                text: "You will be redirected to login...",
                timer: 5000,
                showConfirmButton: false,
                timerProgressBar: true
            }).then(() => {
                window.location.href = "/login";
            });

        } catch (error: any) {

            console.error('Error:', error);

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: "error",
                title: "Error",
                timer: 3000,
                showConfirmButton: false,
                text: "Error from server registering user.",
            });

            return;  

        };

    };

    return (

        <div className="h-screen w-full bg-[#F4F7FB] flex items-center justify-center px-7 md:px-4">

            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">

                <div className="w-full flex flex-col items-center mb-8">

                    <div className="w-20 h-20 bg-[#004DA4]/10 rounded-full flex items-center justify-center">

                        <img src="/favicon.png" alt="Logo SysParking" className="w-full h-full rounded-full" />
                        
                    </div>

                    <h1 className="text-2xl font-bold text-[#004DA4] mt-4">
                        Create your account
                    </h1>

                    <p className="text-gray-600 text-sm">
                        Fill the form to get started
                    </p>

                    <span className="text-[#004DA4] text-sm md:hidden mt-2">Scroll to end</span>

                </div>

                <form className="flex flex-col md:flex-row gap-3 md:gap-8 max-h-[450px] overflow-y-scroll md:overflow-y-auto scrollbar-thin md:scrollbar-none scrollbar-thumb-gray-400 md:scrollbar-thumb-transparent scrollbar-track-gray-200 md:scrollbar-track-transparent" id="formRegister" onSubmit={handleSubmit}>

                    {/* Col 1 */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">

                        {/* Name */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Name</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="name">

                                <User className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="text" className="w-full outline-none text-gray-700" placeholder="Mauricio" value={namePerson} 
                                    onChange={(e) => setNamePerson(e.target.value)} 
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.name ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.name}
                            </span>

                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Last Name</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="lastName">

                                <User className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="text" className="w-full outline-none text-gray-700" placeholder="Pucheta" value={lastNamePerson} 
                                    onChange={(e) => setLastNamePerson(e.target.value)} 
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.lastName ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.lastName}
                            </span>

                        </div>

                        {/* NID */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">National Identity Document</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="nid">

                                <IdCard className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="number" className="w-full outline-none text-gray-700" placeholder="123456789" value={nid === 0 ? "" : nid} 
                                    onChange={(e) => setNid(Number(e.target.value))} 
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.nid ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.nid}
                            </span>

                        </div>

                        {/* Age */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Age</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="age">

                                <Cake className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="number" className="w-full outline-none text-gray-700" placeholder="35" value={age === 0 ? "" : age} 
                                    onChange={(e) => setAge(Number(e.target.value))} 
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.age ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.age}
                            </span>

                        </div>

                    </div>

                    {/* Col 2*/}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">

                        {/* Phone number */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Phone Number</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="phoneNumber">

                                <Phone className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="phone" className="w-full outline-none text-gray-700" placeholder="Pucheta" value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(Number(e.target.value))} 
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.phoneNumber ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.phoneNumber}
                            </span>

                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">

                            <label className="font-medium text-sm text-[#004DA4]">Email</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="email">

                                <Mail className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="email" className="w-full outline-none text-gray-700" placeholder="your@email.com" value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.email ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.email}
                            </span>

                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1 relative">

                            <label className="font-medium text-sm text-[#004DA4]">Password</label>

                            <div className="flex items-center border border-gray-500 rounded-xl px-3 py-2 bg-white" id="password">

                                <Lock className="text-[#004DA4] w-5 h-5 mr-2" />

                                <input type="password" className="w-full outline-none text-gray-700" placeholder="•••••••••" value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyUp={(e) => setCapsLockOn(e.getModifierState("CapsLock"))}
                                />

                            </div>

                            <span className={`text-sm ${fieldErrors.password ? "text-red-500" : "hidden"}`}>
                                {fieldErrors.password}
                            </span>

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