import { useEffect, useRef, useState } from "react";
import {  motion, useAnimation, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Car, ParkingCircle, Camera, Gauge, KeySquare, LineChart } from "lucide-react";

const Services = () => {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);

    }, []);

    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true });
    const controls = useAnimation();

    useEffect(() => {

        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5 }
            });
        };

    }, [isInView, controls]);

    const services = [
        {
            icon: <ParkingCircle size={40} className="text-[#004DA4]" />,
            title: "Real-Time Entry Tracking",
            desc: "Monitor vehicles entering and leaving the parking lot in real-time with automatic logging and activity history.",
        },
        {
            icon: <Camera size={40} className="text-[#00A46D]" />,
            title: "Automated Plate Recognition",
            desc: "Use AI-powered OCR to detect license plates and reduce manual work for staff.",
        },
        {
            icon: <Gauge size={40} className="text-[#A4004D]" />,
            title: "Capacity Dashboard",
            desc: "Track available spots, peak hours, and capacity with live statistics and analytic reporting.",
        },
        {
            icon: <KeySquare size={40} className="text-[#004DA4]" />,
            title: "Secure Access Management",
            desc: "Control who enters the facility with digital passes, temporary access codes, and user-level permissions.",
        },
        {
            icon: <Car size={40} className="text-[#00A46D]" />,
            title: "Digital Ticketing System",
            desc: "Generate digital tickets, automate billing, and simplify customer flow at the parking entry points.",
        },{
            icon: <LineChart size={40} className="text-[#A4004D]" />,
            title: "Pricing Management",
            desc: "Optimize revenue with dynamic pricing rules based on occupancy, time of day, and demand trends.",
        },

    ];

    return (

        <section id="services" className="relative w-full h-auto lg:h-screen py-24 bg-white overflow-hidden">

            <motion.div
                ref={parallaxRef}
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                }}
                transition={{ type: "spring", stiffness: 30 }}
                className="absolute top-10 right-10 w-40 h-40 bg-[#F4F7FB] rounded-full blur-xl opacity-60"
            />

            <motion.div
                animate={{
                    x: -mousePos.x * 0.6,
                    y: -mousePos.y * 0.6,
                }}
                transition={{ type: "spring", stiffness: 40 }}
                className="absolute bottom-10 right-10 w-32 h-32 bg-[#00A46D] rounded-full blur-xl opacity-40"
            />

            <div className="text-center mb-16 px-8">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#004DA4]"
                >
                    What SysParking Offers
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto px-8"
                >
                    A complete ecosystem to manage parking operations, automate control,
                    and optimize business performance with intelligent tools.
                </motion.p>

            </div>

            <div className="max-w-6xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-4 px-6 lg:justify-end">

                {services.map((s, i) => (

                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-4 md:p-8 lg:p-4"
                    >
                        <div className="mb-4 ">{s.icon}</div>
                        <h3 className="text-xl font-semibold text-[#004DA4]">{s.title}</h3>
                        <p className="mt-2 text-gray-600">{s.desc}</p>
                    </motion.div>

                ))}

            </div>

        </section>

    )

};

export default Services;