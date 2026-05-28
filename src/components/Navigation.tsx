import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "../data/portfolio";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-stone-950/95 backdrop-blur-md z-50 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold aurora-text">
              {personalInfo.name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 capitalize relative group ${
                  activeSection === item
                    ? "text-cyan-500 dark:text-cyan-400"
                    : "text-stone-700 dark:text-stone-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                }`}
              >
                {item}
                <span
                  className={`nav-underline ${activeSection === item ? "active" : ""}`}
                />
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-200 transform hover:scale-110"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 dark:text-stone-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block px-3 py-2 text-base font-medium capitalize w-full text-left transition-colors duration-200 ${
                  activeSection === item
                    ? "text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-stone-700 dark:text-stone-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-stone-50 dark:hover:bg-stone-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
