import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

  return (

    <section className="min-h-screen bg-white flex items-center py-16 px-6 relative" id="contact">

      <div className="max-w-6xl lg:max-w-4xl xl:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-8 absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-2 xl:left-1/2 xl:-translate-x-1/2 xl:right-auto">

        <div className="flex flex-col justify-center">  

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#004DA4]"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-lg"
          >
            We are here to help! Reach out to us for inquiries, support, or collaboration.
          </motion.p>

          <div className="mt-10 space-y-4">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Mail className="text-[#004DA4]" />
              <span className="text-gray-700 text-lg">mnp.softdev@gmail.com</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Phone className="text-[#00A46D]" />
              <span className="text-gray-700 text-lg">+54 9 3525 642046</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <MapPin className="text-[#A4004D]" />
              <span className="text-gray-700 text-lg">Córdoba, Argentina</span>
            </motion.div>

          </div>

        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#F4F7FB] rounded-2xl shadow-lg p-8 border border-[#E6ECF5]"
        >

          <h3 className="text-2xl font-semibold text-[#004DA4] mb-6">Send a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input type="text" placeholder="First Name" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004DA4] bg-white" />
            <input type="text" placeholder="Last Name" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004DA4] bg-white" />

          </div>

          <input type="email" placeholder="Email Address" className="mt-4 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004DA4] bg-white" />

          <textarea placeholder="Your Message" rows={5} className="mt-4 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004DA4] bg-white" />

          <button type="submit" className="mt-6 w-full py-3 rounded-xl text-white font-semibold bg-[#00A46D] hover:bg-[#008A5A] transition">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>

  )

};