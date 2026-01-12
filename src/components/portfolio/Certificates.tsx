import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    credentialUrl: "#",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
    skills: ["HTML5", "CSS3", "Accessibility"],
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2024",
    credentialUrl: "#",
    skills: ["React", "TypeScript", "Design Patterns"],
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
    skills: ["AWS", "Cloud Computing", "DevOps"],
  },
  {
    title: "Google UX Design",
    issuer: "Google (Coursera)",
    date: "2023",
    credentialUrl: "#",
    skills: ["UX Design", "Figma", "User Research"],
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-32 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-16"
        >
          <span className="text-muted-foreground uppercase tracking-widest text-sm mb-4 block">
            Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-6 hover-lift relative overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-muted/30 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <Award className="w-6 h-6 text-foreground" />
                  </div>
                  <a
                    href={cert.credentialUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-muted/50 rounded text-muted-foreground"
                    >
                      {skill}
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

export default Certificates;
