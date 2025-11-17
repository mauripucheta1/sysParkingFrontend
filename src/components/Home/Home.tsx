import { motion } from "framer-motion";

const Home = () => {

    return (

        <main className="w-full h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden" id="heroSection">

            <div className="absolute top-0 right-0 2xl:w-[600px] 2xl:h-[190px]">

               <img src="parking-sys.png" alt="SysParking" className="w-full h-full" />

            </div>

            <section className="max-w-4xl text-center md:text-left px-8">

                <h1 className="text-4xl md:text-6xl font-bold text-[#004DA4] leading-tight">
                    Smart Parking Solutions for Modern Businesses
                </h1>

                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
                    Manage entries, automate control and optimize your parking operations with our powerful and intuitive platform.
                </p>

                <a href="#services" className="inline-block mt-8 px-8 py-3 rounded-lg text-white font-semibold bg-[#00A46D] hover:bg-[#008e5e] transition-all shadow-md">
                    Explore Services
                </a>

            </section>

            <div className="absolute bottom-20 md:right-8 bg-white/90 p-4 flex flex-col items-center md:items-start">

                <p className="text-[#004DA4] font-bold text-lg">+450 Parkings Connected</p>
                <span className="text-gray-500 text-sm">Across Córdoba</span>

            </div>

            <div className="flex flex-col items-center cursor-pointer bottom-10 z-10 absolute">

                <div className={`w-6 h-10 border-2 border-[#004DA4] rounded-full flex items-start justify-center p-1`}>

                    <motion.div className={`w-2 h-2 bg-[#004DA4] rounded-full`}
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />

                </div>

            </div>

        </main>

    )

};

export default Home;