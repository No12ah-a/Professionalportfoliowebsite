import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "SQL", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB Atlas"],
    },
    {
      title: "ML/NLP",
      skills: ["BERT", "DistilBERT", "Sentiment Analysis", "Data Mining", "Federated Learning"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "NetBeans", "MinGW", "Render", "Cloudinary", "Stripe", "Clerk", "Camunda"],
    },
    {
      title: "Concepts",
      skills: ["Data Structures", "REST APIs", "Cloud Deployment", "Socket Programming"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Technical Skills
          </h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-300 transition-all relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.5 }}
                style={{ transformOrigin: "left" }}
              />
              <motion.h3
                className="text-lg font-semibold mb-4 text-slate-900 mt-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1.5 text-slate-700 text-sm rounded-md font-light bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}