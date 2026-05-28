import { motion } from "framer-motion"

function Hero() {

  return (

    <section className="relative text-white flex flex-col justify-center items-center text-center min-h-screen px-6 overflow-hidden">

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >

          SMART AI <span className="text-blue-500">AUTOMATION</span>

          <br />

          FOR MODERN BUSINESSES

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-lg md:text-2xl mt-8 leading-relaxed px-2"
        >

          AI Automation, Websites, Data Science,
          Salesforce CRM & Modern Tech Solutions.

        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 px-8 md:px-12 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg md:text-2xl transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.9)] hover:scale-105"
        >

          Explore Services

        </motion.button>

      </div>

    </section>

  )
}

export default Hero