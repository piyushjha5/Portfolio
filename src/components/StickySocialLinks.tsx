import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "../data/portfolio";

const StickySocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-4 sm:left-6 lg:left-8 z-50 flex space-x-4 lg:pl-14">
      {socialLinks.map((link) => {
        const Icon = { Github, Linkedin, Twitter }[link.icon];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="bg-white dark:bg-stone-800 p-3 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-950 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default StickySocialLinks;
