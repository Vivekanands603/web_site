import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", target: "#home" },
  { name: "About Us", target: "#about" },
  { name: "Directors", target: "#directors" },
  { name: "Products", target: "#products" },
  { name: "News", target: "#news" },
  { name: "Contact", target: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ item }) => (
    <a
      href={item.target}
      onClick={() => setIsOpen(false)}
      className="text-sm font-medium hover:text-blue-600 text-gray-700 transition-colors"
    >
      {item.name}
    </a>
  );

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">MySite</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
              <NavLink item={item} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t shadow-sm"
          >
            <div className="flex flex-col px-4 py-2 gap-2">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
