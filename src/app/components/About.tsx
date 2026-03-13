import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code, Database, Brain, Shield } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in building scalable applications with modern web technologies",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Strong foundation in data analysis and processing large-scale datasets",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Skilled in ML algorithms, federated learning, and sentiment analysis",
    },
    {
      icon: Shield,
      title: "Secure Systems",
      description: "Expertise in secure authentication and cloud deployment",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-slate-50 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg text-slate-600 text-center mb-16 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I am an aspiring Software Developer with a passion for creating innovative solutions.
            My expertise spans full-stack web development, big data analytics, and machine learning.
            I have a strong foundation in data analysis, federated learning, network programming,
            and sentiment mining. I actively participate in national-level hackathons and technical
            symposiums, constantly pushing the boundaries of what's possible with technology.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-blue-300 transition-all relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    transition: { duration: 0.5 }
                  }}
                >
                  <highlight.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 relative z-10">{highlight.title}</h3>
                <p className="text-slate-600 font-light relative z-10">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}