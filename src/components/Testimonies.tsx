import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
    XAxis,
} from "recharts";

const testimonials = [
    {
        name: "Jonathan Reed",
        role: "Parking Facility Manager – Toronto",
        text: "SysParking transformed the way we operate. The real-time entry tracking alone reduced manual tasks by 40%.",
    },
    {
        name: "Emily Parker",
        role: "Operations Director – GreenPark Co.",
        text: "The OCR plate recognition is unbelievably accurate. It completely streamlined our access control.",
    },
    {
        name: "David Mitchell",
        role: "CEO – MetroPark Solutions",
        text: "We could track occupancy peaks and optimize staffing. The analytics are incredibly valuable.",
    },
    {
        name: "Sophia Martinez",
        role: "Administrator – AutoSecure Parking",
        text: "Digital ticketing helped us eliminate paper waste and automate billing. It paid for itself in a month.",
    },
];

const counters = [
    { number: 45000, label: "Processed Entries" },
    { number: 120, label: "Active Parking Clients" },
    { number: 98, label: "Customer Satisfaction (%)" },
];

const data = [
    { day: "Mon", value: 4200 },
    { day: "Tue", value: 5100 },
    { day: "Wed", value: 4800 },
    { day: "Thu", value: 5300 },
    { day: "Fri", value: 6100 },
    { day: "Sat", value: 7200 },
    { day: "Sun", value: 6800 },
];

const Testimonies = () => {
    return (
        <section
            id="testimonies"
            className="w-full h-screen bg-[#F4F7FB] flex flex-col justify-center py-20 overflow-hidden relative"
        >
            {/* Title */}
            <div className="text-center mb-12 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#004DA4]">
                    What Our Clients Say
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    SysParking is trusted by businesses worldwide to automate and optimize their parking operations.
                </p>
            </div>

            {/* Carousel */}
            <Carousel />

            {/* Counters */}
            <div className="mt-14 flex flex-wrap justify-center gap-12 px-6">
                {counters.map((c, i) => (
                    <Counter key={i} number={c.number} label={c.label} />
                ))}
            </div>

            <MiniChart />
        </section>
    );
};

/* -------------------- Carousel Component -------------------- */
const Carousel = () => {
    return (
        <div className="relative w-[75%] overflow-hidden mx-auto py-5">
            <motion.div
                className="flex gap-10 px-6"
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }}
            >
                {/* Doubled list for infinite loop */}
                {[...testimonials, ...testimonials].map((t, i) => (
                    <motion.div
                        key={i}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        className="
                            min-w-[280px] md:min-w-[420px]
                            bg-white rounded-xl shadow-md border border-[#E6ECF3]
                            p-6
                        "
                    >
                        <p className="text-gray-700 text-lg italic">"{t.text}"</p>
                        <div className="mt-4">
                            <p className="text-[#004DA4] font-semibold">{t.name}</p>
                            <p className="text-gray-500 text-sm">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

/* -------------------- Counter Component -------------------- */
const Counter = ({ number, label, color }: { number: number; label: string; color?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const count = useMotionValue(0);
    const rounded = useMotionValue(0);

    // Sync rounded with count
    useEffect(() => {
        const unsub = count.on("change", (latest) => {
            rounded.set(Math.floor(latest));
        });
        return () => unsub();
    }, []);

    // Trigger animation when visible
    useEffect(() => {
        if (isInView) {
            animate(count, number, { duration: 2 });
        }
    }, [isInView, number]);

    return (
        <div ref={ref} className="text-center">
            <motion.span
                style={{ color: color ?? '#004DA4' }}
                className="text-4xl md:text-5xl font-bold"
            >
                <motion.span
    style={{ color: color ?? "#004DA4" }}
    className="text-4xl md:text-5xl font-bold"
>
    {rounded}
</motion.span>

            </motion.span>

            <p className="text-gray-600 mt-2 text-lg">{label}</p>
        </div>
    );
};

/* Number animation helper */
const AnimatedNumber = ({ controls }: { controls: any }) => {
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        controls.start({
            value: controls?.currentValue || 0,
            transition: { duration: 2 },
            onUpdate: (latest: any) => {
                if (spanRef.current) {
                    spanRef.current.textContent = Math.floor(latest.value).toString();
                }
            },
        });
    }, [controls]);

    return <span ref={spanRef}>0</span>;
};

const MiniChart = () => {
    return (
        <div className="absolute bottom-10 right-10 hidden lg:block bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-[#E6ECF3] p-4 w-[260px]">
            <p className="text-sm text-gray-600 font-medium mb-2">
                Vehicle Entries (Last 7 Days)
            </p>

            <ResponsiveContainer width="100%" height={120}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#004DA4"
                        strokeWidth={2.5}
                        dot={false}
                        isAnimationActive={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Testimonies;