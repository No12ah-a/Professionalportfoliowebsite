import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Big Data Sentiment Analysis",
      description: "Trained sentiment models on large-scale reviews using BERT & DistilBERT, achieving 88% accuracy and 0.86 F1-score.",
      tech: ["Python", "BERT", "DistilBERT", "Pandas", "Scikit-learn"],
      highlights: ["88% accuracy", "0.86 F1-score", "Fine-tuning & hyperparameter optimization"],
    },
    {
      title: "Edemy - Learning Management System",
      description: "Full-stack LMS with course creation, enrollment, and progress tracking. Integrated Clerk auth, Stripe payments, and Cloudinary media.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary", "Clerk"],
      highlights: ["Live deployment", "Responsive design", "Complete payment integration"],
      link: "https://edemy-7wax.onrender.com",
    },
    {
      title: "Medicinal Plants Awareness App",
      description: "Desktop app promoting medicinal plant awareness with search, usage details, and regional data. Built with MySQL DB and CRUD operations.",
      tech: ["Java", "MySQL", "NetBeans IDE"],
      highlights: ["Normalized MySQL DB", "JDBC connectivity", "User-friendly filters"],
    },
    {
      title: "Radio Broadcasting System using IP",
      description: "Built IP-based radio app in C using UDP multicast with server-client architecture for connection handling and real-time streaming.",
      tech: ["C", "MinGW", "Socket Programming", "UDP/TCP"],
      highlights: ["Server-client architecture", "Real-time streaming", "Compiled using MinGW"],
    },
    {
      title: "Wool Management System",
      description: "Designed comprehensive wool industry management app with normalized schemas (3NF), reporting, and SQL optimization.",
      tech: ["Java", "MySQL", "JDBC", "NetBeans IDE"],
      highlights: ["Normalized schema (3NF)", "SQL optimization", "Comprehensive reporting"],
    },
    {
      title: "DeepHashVFL - Federated Learning Research",
      description: "Co-authored paper on Deep Binary Hashing for VFL, achieved 97% accuracy on MNIST with 15% reduced attack rates.",
      tech: ["Python", "PyTorch", "Federated Learning"],
      highlights: ["97% accuracy", "Published research", "15% attack rate reduction"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Project Experience
          </h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-lg overflow-hidden group border border-slate-200 hover:border-blue-300 transition-all relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                style={{ transformOrigin: "left" }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3 
                    className="text-xl font-semibold text-slate-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
                <motion.p 
                  className="text-slate-600 mb-4 text-sm leading-relaxed font-light"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 + i * 0.1 }}
                    >
                      <Star className="w-3 h-3 text-blue-600 fill-blue-600" />
                      <span className="font-light">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2.5 py-1 text-slate-600 text-xs rounded bg-white font-light"
                      style={{
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'rgb(226, 232, 240)'
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.6 + techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderColor: 'rgba(59, 130, 246, 0.3)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}