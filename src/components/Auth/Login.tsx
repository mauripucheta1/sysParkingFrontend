import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
        e.preventDefault(); 
    
        try {
    
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
    
            const data = await response.json();
    
            if (!response.ok) {

                document.querySelectorAll("#formLogin div[id]").forEach((input) => {
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

                if (data.errors?.password === "Incorrect username and/or password.") {

                    ["email", "password"].forEach((field) => {
                        const el = document.getElementById(field);
                        if (el) {
                            el.classList.remove("border-gray-500");
                            el.classList.add("border-red-500");
                        }
                    });

                    setFieldErrors({
                        email: "",
                        password: data.errors.password
                    });

                    return;

                };

                if (data.errors) {

                    Object.keys(data.errors).forEach((field) => {
                        const el = document.getElementById(field);
                        if (el) {
                            el.classList.remove("border-gray-500");
                            el.classList.add("border-red-500");
                        }
                    });

                    setFieldErrors(data.errors);
                    return;

                };

                setFieldErrors({});
                return;

            };
    
            document.querySelectorAll("#formLogin div[id]").forEach((input) => {
                input.classList.remove("border-red-500");
                input.classList.add("border-green-500");
            });
    
            document.querySelectorAll("#formLogin span").forEach((span) => {
                span.classList.add("hidden");
            });
    
            setFieldErrors({});

            const msgUser = 'Welcome to the SysParking client panel, enjoy...';
            const msgAdmin = 'Welcome to the SysParking admin panel, enjoy...';

            const msg = data.usuario.role === 1 ? msgAdmin : msgUser;
    
            Swal.fire({
                icon: "success",
                toast: true,
                position: 'top-end',
                title: "User successfully authenticated!",
                text: msg,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true
            }).then(() => {
                if (data.usuario.role === 1) window.location.href = "/admin";
                else window.location.href = "/user";
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
                text: "Server error authenticating user.",
            });
    
            return;  
    
        };
    
    };

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

                <form className="flex flex-col gap-6" onSubmit={handleSubmit} id="formLogin">
                    
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

                            <input type={showPassword ? "text" : "password"}  className="w-full outline-none text-gray-700" placeholder="•••••••••" value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                onKeyUp={(e) => setCapsLockOn(e.getModifierState("CapsLock"))}
                            />

                            <button type="button" className="ml-2 focus:outline-none hover:cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="text-gray-600 w-5 h-5" />
                                ) : (
                                    <Eye className="text-gray-600 w-5 h-5" />
                                )}
                            </button>

                        </div>

                        <span className={`text-sm ${fieldErrors.password ? "text-red-500" : "hidden"}`}>
                            {fieldErrors.password}
                        </span>

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