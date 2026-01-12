import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, payments, and admin dashboard. Built with React, TypeScript, and modern UI components.",
    tags: ["React", "TypeScript", "Tailwind", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time data visualization dashboard with interactive charts and responsive design.",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat application with AI integration, featuring real-time messaging and sleek animations.",
    tags: ["Next.js", "OpenAI", "Framer Motion"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Portfolio Template",
    description: "Customizable portfolio template with dark mode, animations, and CMS integration.",
    tags: ["React", "GSAP", "Sanity CMS"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-16"
        >
          <span className="text-muted-foreground uppercase tracking-widest text-sm mb-4 block">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={`group glass-card overflow-hidden hover-lift ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted/20">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full bg-muted/10 flex items-center justify-center"
                >
                  <span className="font-display text-6xl text-muted-foreground/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center gap-4"
                >
                  <a
                    href={project.liveUrl}
                    className="glass-card p-3 hover:bg-muted/30 transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="glass-card p-3 hover:bg-muted/30 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted/50 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
