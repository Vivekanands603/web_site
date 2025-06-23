import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative "
    >
      {/* Top Wave Divider */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#1e3a8a"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-blue-950 text-white px-6 pt-20 pb-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vivekanand S</h3>
            <p className="text-gray-300">
              Passionate front-end developer building beautiful user experiences in React & Vue.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#products" className="hover:text-blue-300">Products</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/vivekanand-selvakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://zippy-douhua-371494.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  Portflio
                </a>
              </li>
              <li>
                <a
                  href="mailto:vivekanandselvakumar@gmail.com"
                  className="hover:text-blue-300"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-10">
          © {new Date().getFullYear()} Vivekanand Selvakumar. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
