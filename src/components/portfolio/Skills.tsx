import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Git", level: 88 },
  { name: "Figma", level: 80 },
];

const technologies = [
  "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
  "Tailwind CSS", "Next.js", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "REST APIs", "Git", "GitHub",
  "Figma","AI/ML"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
      </div>

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-16"
        >
          <span className="text-muted-foreground uppercase tracking-widest text-sm mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-muted-foreground/50 to-foreground rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.03 }}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--muted))" }}
                  className="px-4 py-2 bg-muted/30 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
