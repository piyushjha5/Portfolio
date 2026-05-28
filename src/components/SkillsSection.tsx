import React, { useState } from "react";
import { Code, Zap, Palette } from "lucide-react";
import { skills, skillLogos } from "../data/portfolio";

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).style.display = "none";
  };

  return (
    <section
      id="skills"
      className="py-20 bg-stone-50 dark:bg-stone-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Aurora background accents */}
      <div
        className="absolute top-10 -left-24 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift 10s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift-alt 13s ease-in-out infinite' }}
      />
      <div className="aurora-stars" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="bg-white dark:bg-stone-950 rounded-2xl p-8 shadow-xl border border-stone-200 dark:border-stone-800 mb-16 aurora-card">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-stone-50 dark:bg-stone-900 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer border border-transparent hover:border-stone-300 dark:hover:border-stone-600 aurora-border"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="mb-3 relative">
                  {skillLogos[skill] && (
                    <img
                      src={skillLogos[skill]}
                      alt={`${skill} logo`}
                      className={`w-12 h-12 transition-all duration-300 ${
                        hoveredSkill === skill ? "scale-110 rotate-3" : ""
                      }`}
                      onError={handleImageError}
                    />
                  )}
                  {!skillLogos[skill] && (
                    <div className="w-12 h-12 aurora-bg rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-200 text-center leading-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Banner */}
        <div className="aurora-bg rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current
            with the latest trends, best practices, and emerging technologies in
            the software development landscape.
          </p>
          <div className="flex justify-center space-x-6 text-emerald-200">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>Fast Learner</span>
            </div>
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <span>Problem Solver</span>
            </div>
            <div className="flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              <span>Creative Thinker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
