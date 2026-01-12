import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Message sent! (Demo only)");
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-muted-foreground uppercase tracking-widest text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Have a project in mind or just want to chat? I'm always open to 
              discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="glass-card p-4">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="font-medium hover:text-gradient transition-all">
                    hello@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="glass-card p-4">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span className="font-medium">Remote • Worldwide</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 glow-box">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground/50 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-foreground text-background font-medium py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
