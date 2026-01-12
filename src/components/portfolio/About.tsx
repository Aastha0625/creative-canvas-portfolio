import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
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
          {/* Image/Visual Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square"
            >
              {/* Abstract geometric shape */}
              <div className="absolute inset-0 glass-card glow-box overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent" />
                <div className="absolute top-8 left-8 w-32 h-32 border border-muted-foreground/20 rotate-45" />
                <div className="absolute bottom-16 right-16 w-24 h-24 bg-muted/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="font-display text-8xl text-muted-foreground/10 font-bold">
                    &lt;/&gt;
                  </span>
                </div>
              </div>
              
              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 glass-card flex items-center justify-center"
              >
                <span className="text-3xl">✨</span>
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
              Passionate about{" "}
              <span className="text-gradient">creating</span> digital excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              I'm a frontend developer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. With expertise 
              in modern web technologies, I transform complex problems into 
              elegant solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-12"
            >
              My approach combines technical proficiency with creative thinking, 
              ensuring every project not only works flawlessly but also delivers 
              an exceptional user experience.
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
                  <span className="font-display text-3xl font-bold text-foreground block">
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
