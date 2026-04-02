import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2", label: "Internship Experiences" },
    { value: "5+", label: "Projects Completed" },
    { value: "Full Stack", label: "Development" },
    { value: "AI/ML", label: "Enthusiast" },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-96 h-96 md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden glass-card glow-box"
            >
              <img
                src="public\WhatsApp Image 2026-01-12 at 3.13.47 PM.jpeg"
                alt="Your Profile"
                className="w-full h-full object-cover"
              />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card flex items-center justify-center"
              >
              </motion.div>
            </motion.div>

          </div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground uppercase tracking-widest text-sm mb-4 block"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Full Stack Developer &{" "}
              <span className="text-gradient">AI/ML Enthusiast</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              I’m a full stack developer passionate about building scalable,
              high-performance web applications with intuitive user experiences.
              I work across the entire stack — from crafting responsive
              frontends to designing robust backend systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-12"
            >
              Alongside development, I’m deeply interested in Artificial
              Intelligence and Machine Learning, exploring how intelligent
              systems can enhance products, automate decisions, and solve
              real-world problems.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 text-center hover-lift"
                >
                  <span className="font-display text-2xl font-bold text-foreground block">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
