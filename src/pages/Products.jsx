import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const categories = {
    Web: [
        {
            name: "Landing Page Builder",
            desc: "Build sleek marketing pages with drag-and-drop UI.",
        },
        {
            name: "Portfolio CMS",
            desc: "Manage portfolios with modern themes and real-time updates.",
        },
        {
            name: "E-commerce Platform",
            desc: "A complete store with cart, checkout, analytics and billing etc.",
        },
    ],
    Mobile: [
        {
            name: "Task Manager App",
            desc: "Plan, prioritize and track your daily tasks with this app.",
        },
        {
            name: "Fitness Tracker",
            desc: "Track steps, calories, and workout routines on the go.",
        },
        {
            name: "Chat Messenger",
            desc: "Chat with friends, family, and colleagues in real-time.",
        },
    ],
    AI: [
        {
            name: "AI Content Writer",
            desc: "Generate engaging blog posts and marketing copy in seconds.",
        },
        {
            name: "Vision Detection",
            desc: "AI tool for detecting and labeling objects in images.",
        },
        {
            name: "Speech Analyzer",
            desc: "AI tool for transcribing and analyzing audio files based app.",
        },
    ],
};

const Products = () => {
    const [activeTab, setActiveTab] = useState("Web");

    return (
        <section id="products" className="bg-white px-6 py-24">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    Our Products
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-6 mb-12">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`text-sm md:text-base px-5 py-2.5 rounded-full font-semibold transition-all duration-300
    ${activeTab === category
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>

                    ))}
                </div>

                {/* Animated Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid gap-6 md:grid-cols-3"
                    >
                        {categories[activeTab].map((product, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="p-[2px] rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"
                            >
                                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                                    <h3 className="text-lg font-bold text-blue-700 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{product.desc}</p>
                                </div>
                            </motion.div>


                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Products;
