import React from "react";
import { Calendar } from "lucide-react";
import { education, experience } from "../data/portfolio";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-stone-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Aurora background accents */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift 12s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift-alt 15s ease-in-out infinite' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            I'm a passionate software engineer who loves creating innovative
            solutions and building exceptional user experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              Recent Computer Science graduate with hands-on experience in
              developing modern web applications that prioritize user
              experience, performance, and clean architecture. Skilled in
              front-end development and passionate about writing maintainable
              code, solving real-world problems, and continuously learning.
              Motivated by collaboration, innovation, and the opportunity to
              contribute to meaningful projects that make a lasting impact.
            </p>
          </div>

          {/* Education Timeline - Minimal */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 aurora-bg rounded-full flex-shrink-0"></div>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-stone-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 aurora-card aurora-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 dark:text-white">
                      {job.position}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center text-stone-500 dark:text-stone-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    {job.duration}
                  </div>
                </div>
                <ul className="list-disc pl-5 text-stone-600 dark:text-stone-300 mb-4 space-y-1">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
