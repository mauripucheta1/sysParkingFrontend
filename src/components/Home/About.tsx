import { motion, useMotionValue, useTransform } from "framer-motion";

const About = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const moveX = useTransform(mouseX, [0, 1], [-15, 15]);
    const moveY = useTransform(mouseY, [0, 1], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        mouseX.set(e.clientX / innerWidth);
        mouseY.set(e.clientY / innerHeight);
    };

    return (

        <section id="about" className="w-full min-h-screen bg-[#F4F7FB] flex items-center justify-center py-20 px-6 relative overflow-hidden" onMouseMove={handleMouseMove}>

            <motion.div
                className="absolute top-10 left-40 w-40 h-40 bg-[#004DA4] opacity-10 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 8 }}
            />

            <motion.div
                className="absolute bottom-10 right-20 w-52 h-52 bg-[#A4004D] opacity-10 rounded-full"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 10 }}
            />

            <motion.img
                src="/car-blue.png" 
                alt="Car animation"
                className="absolute w-16 opacity-70"
                style={{ x: moveX, y: moveY }}
            />

            <motion.img
                src="/car-green.png" 
                alt="Car animation"
                className="absolute w-12 opacity-60 bottom-20 left-1/3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
            />

            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >

                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-[#004DA4] bg-white">

                        <img src="/founder.png" alt="Founder" className="w-full h-full object-cover" />

                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="px-8"
                >

                    <h2 className="text-4xl md:text-5xl font-bold text-[#004DA4] mb-4">
                        About the Founder
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Hi! I’m <strong className="text-[#00A46D]">Mauricio Pucheta</strong>, 
                        the founder and full-stack developer behind this smart parking system.
                        I created this platform with a simple mission: to bring efficiency, 
                        automation and real-time control to parking operations of any size.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        With a strong background in web development and system architecture, 
                        I designed this solution to be fast, intuitive and scalable. My goal 
                        is to help businesses modernize their parking management through 
                        technology that feels simple — yet powerful.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Every feature, every screen and every line of code has been developed 
                        with precision, care and focus on user experience. This is just the 
                        beginning — and I’m excited for what’s next.
                    </p>

                    <a href="#contact" className="inline-block mt-4 px-8 py-3 rounded-lg text-white font-semibold bg-[#00A46D] hover:bg-[#008e5e] transition-all shadow-md">
                        Contact Me
                    </a>

                </motion.div>

            </div>


        </section>

    );

};

export default About;