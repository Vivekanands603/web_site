import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const News = () => {
  // ✅ Move these inside the component
  const featured = {
    title: "We’ve Launched Our New Platform",
    date: "September 18, 2024",
    excerpt:
      "Our new web platform is live! Experience faster performance, better design, and exciting new features.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
,
  };

  const others = [
    {
      title: "CEO Featured on TechTalk",
      date: "August 5, 2024",
    },
    {
      title: "Hackathon Highlights",
      date: "July 20, 2024",
    },
    {
      title: "New Office in Bengaluru",
      date: "June 10, 2024",
    },
    {
      title: "Team offsite at Pondicherry",
      date: "May 25, 2024",
    },
  ];

  return (
    <section id="news" className="bg-white px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto space-y-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          News & Updates
        </h2>

        {/* Featured Block */}
        <motion.div
          variants={fadeInUp}
          className="md:flex gap-8 items-center"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <p className="text-sm text-gray-400 mb-1">{featured.date}</p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {featured.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{featured.excerpt}</p>
            <a
              href="#"
              className="inline-block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition"
            >
              Read More
            </a>
          </div>
        </motion.div>

        {/* Other News */}
        <motion.div
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-8"
        >
          {others.map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-blue-100 pl-4 hover:border-blue-500 transition"
            >
              <p className="text-sm text-gray-400 mb-1">{item.date}</p>
              <h4 className="text-md font-semibold text-blue-700 hover:text-blue-900 transition">
                {item.title}
              </h4>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default News;
