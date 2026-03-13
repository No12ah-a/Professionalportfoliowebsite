import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: "B.Tech - Information Technology",
      institution: "Mepco Schlenk Engineering College (Autonomous)",
      year: "2026 (Expected)",
      color: "from-blue-600 to-cyan-500",
    }
  ];

  const certifications = [
    "NPTEL Certification - Affective Computing (2025)",
    "NPTEL Certification - Industry 4.0 & IoT (2024)",
    "Digital SoC Design - Bharath Semi. (2023)",
    "Programming using Java - Infosys Springboard Certification (2024)",
    "IEEE Certification - Translations in English (2022)",
    "Introduction to NoSQL databases - Infosys Spring-Board Certification (2024)",
    "NPTEL Certification - Joy of Computing Python (2023)",
  ];

  const achievements = [
    "Paper Presentations: 'Devin AI' at Dhanalakshmi Srinivasan College; 'NLP Models for Educational Counselling' at Velammal Engineering College, Chennai.",
    "Actively participated in multiple inter-college symposiums and technical presentations.",
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Education & Achievements
          </h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="w-5 h-5 text-blue-600" />
              </motion.div>
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-lg p-6 overflow-hidden group"
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(226, 232, 240)'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 5,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <div className="ml-4">
                    <motion.h4 
                      className="text-xl font-semibold text-blue-600 mb-1"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {edu.degree}
                    </motion.h4>
                    <p className="text-slate-700 mb-1 font-light">{edu.institution}</p>
                    <div className="flex gap-4 text-sm text-slate-500 font-light">
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-5 h-5 text-blue-600" />
              </motion.div>
              Certifications & Workshops
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 group"
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(226, 232, 240)'
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -3,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <p className="text-slate-700 text-sm font-light">{cert}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Academic Achievements */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-slate-900 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Academic Achievements
            </motion.h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 rounded-lg p-6 relative overflow-hidden group"
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(191, 219, 254)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.01,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <p className="text-slate-700 leading-relaxed font-light">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}