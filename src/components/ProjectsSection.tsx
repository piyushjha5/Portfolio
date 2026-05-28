import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "../data/portfolio";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-stone-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Aurora background accents */}
      <div
        className="absolute -top-16 left-1/4 w-72 h-72 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift-alt 11s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-10 -right-16 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl pointer-events-none"
        style={{ animation: 'glow-drift 14s ease-in-out infinite' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-stone-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-200 dark:border-stone-800 group aurora-card aurora-border"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                    <Star size={16} className="mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors duration-200 group/link"
                    >
                      <ExternalLink
                        size={16}
                        className="mr-2 group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-300 transition-colors duration-200 group/link"
                  >
                    <Github
                      size={16}
                      className="mr-2 group-hover/link:rotate-12 transition-transform duration-200"
                    />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/piyushjha5?tab=repositories"
            target="_blank"
            className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 font-medium text-lg group transition-all duration-300"
          >
            <Github
              size={20}
              className="mr-2 group-hover:rotate-12 transition-transform duration-300"
            />
            View All Projects on GitHub
            <ExternalLink
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
