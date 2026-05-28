import React from "react";
import {
  Mail,
  Download,
  ChevronDown,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 dark:from-stone-950 dark:to-stone-900 transition-colors duration-300 aurora-mesh"
    >
      {/* Aurora cyan blob */}
      <div className="aurora-blob-cyan" />

      {/* Twinkling stars */}
      <div className="aurora-stars" />

      {/* Extra drifting glow */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift 14s ease-in-out infinite' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="aurora-text">
                {personalInfo?.name || "John Doe"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 mb-6">
              {personalInfo?.title || "Full Stack Developer"}
            </p>

            {/* Bio */}
            <p className="text-lg text-stone-500 dark:text-stone-400 mb-8">
              {personalInfo?.bio ||
                "Passionate about creating innovative solutions and beautiful user experiences."}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="aurora-bg text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
              </button>

              <a
                href="/piyush_jha.pdf"
                target="_blank"
                className="border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-stone-900 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/hero.png"
                alt={personalInfo?.name || "Profile"}
                className="w-96 h-96 lg:w-124 lg:h-124 rounded-full border-4 border-white dark:border-stone-700 shadow-xl transform hover:scale-105 transition-all duration-300 aurora-ring"
              />
              {/* Decorative background circle */}
              <div
                className="absolute w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 opacity-20 blur-xl -z-10"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center mt-12">
          <ChevronDown
            size={32}
            className="mx-auto text-stone-400 dark:text-stone-500 animate-bounce cursor-pointer hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
