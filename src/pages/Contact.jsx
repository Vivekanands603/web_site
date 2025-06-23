import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-50 px-6 py-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-5xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                    Contact Me
                </h2>

                <div className="md:flex gap-10">
                    {/* Contact Form */}
                    {/* Contact Form with glass effect */}
                    <div className="md:w-2/3 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 space-y-5">
                        <form className="space-y-5">
                            {["Name", "Email", "Message"].map((label, index) => (
                                <div key={index}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {label}
                                    </label>
                                    {label === "Message" ? (
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-blue-500 focus:scale-[1.01] transition-all"
                                            placeholder={`Your ${label.toLowerCase()}...`}
                                        />
                                    ) : (
                                        <input
                                            type={label === "Email" ? "email" : "text"}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-blue-500 focus:scale-[1.01] transition-all"
                                            placeholder={`Your ${label.toLowerCase()}`}
                                        />
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>


                    {/* Contact Info */}
                    <motion.div
                        className="md:w-1/3 mt-10 md:mt-0"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="text-gray-700 space-y-4">
                            <motion.div variants={fadeItem}>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-medium">Vivekanand Selvakumar</p>
                            </motion.div>

                            <motion.div variants={fadeItem}>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium">Bengaluru, India</p>
                            </motion.div>

                            <motion.div variants={fadeItem}>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">vivekanandselvakumar@gmail.com</p>
                            </motion.div>

                            <motion.div variants={fadeItem} className="pt-4 flex gap-4">
                                <a
                                    href="https://zippy-douhua-371494.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="https://linkedin.com/in/vivekanand-selvakumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    LinkedIn
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
