import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const directors = [
    {
        name: "John Doe",
        title: "Managing Director",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Jane Smith",
        title: "Creative Director",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Michael Brown",
        title: "Technical Director",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
];

const Directors = () => {
    return (
        <section
            id="directors"
            className="min-h-screen bg-gray-50 px-6 py-24 flex items-center justify-center"
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl w-full text-center"
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
                >
                    Meet Our Directors
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {directors.map((director, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white p-6 rounded-xl shadow border border-transparent hover:border-blue-400 transition-all cursor-pointer"

                        >
                            <img
                                src={director.image}
                                alt={director.name}
                                className="w-28 h-28 rounded-full mx-auto object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-700">
                                {director.name}
                            </h3>
                            <p className="text-sm text-gray-500">{director.title}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Directors;
