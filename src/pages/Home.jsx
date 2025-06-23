import { motion } from "framer-motion";

const title = "Empowering Innovation with Design";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const child = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
        },
    },
};


const Home = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 overflow-hidden">
            {/* Background blobs (same as before) */}
            <motion.div
                className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
                animate={{ x: 50, y: 50 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
                className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
                animate={{ x: -40, y: -30 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-5xl px-4 w-full">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent xl:leading-tight space-x-4 mb-1"


                >
                    {title.split(" ").map((word, index) => (
                        <motion.span key={index} variants={child} className="inline-block">
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-lg text-gray-700 mb-5"
                >
                    We build interactive experiences with modern technology.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
                >
                    Get Started
                </motion.button>
            </div>

            {/* Scroll arrow */}
            <motion.div
                className="absolute bottom-6 text-2xl text-blue-500 animate-bounce z-10 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={() => {
                    const about = document.getElementById("about");
                    if (about) {
                        about.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                ↓
            </motion.div>

        </section>
    );
};

export default Home;
