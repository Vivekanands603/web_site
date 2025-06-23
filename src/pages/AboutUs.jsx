import { motion } from "framer-motion";
import Lottie from "lottie-react";
import teamworkAnimation from "../assets/animation.json";


const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }, 
    },
};

const AboutUs = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center bg-white px-6 py-24 overflow-hidden"
        >
            {/* 💡 Background Light Effect */}
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center"
            >
                {/* 🖼 Image/illustration */}
                <motion.div variants={fadeInUp} className="hidden md:block">
                    <Lottie animationData={teamworkAnimation} loop={true} className="w-full max-w-sm" />
                </motion.div>

                {/* 📝 Content */}
                <motion.div variants={fadeInUp} className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                        About Us
                        <span className="block w-12 h-1 bg-blue-500 mt-2 mx-auto md:mx-0 rounded-full"></span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        We are a team of passionate designers, developers, and dreamers. Our
                        mission is to create intuitive, engaging, and scalable digital
                        experiences that leave a lasting impression. With a focus on
                        creativity, collaboration, and continuous growth, we turn ideas into
                        impactful realities.
                    </p>
                </motion.div>
                

            </motion.div>
            
        </section>
    );
};

export default AboutUs;
