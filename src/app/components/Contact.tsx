import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Github, Linkedin, Mail, MapPin, Globe } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            I'm always open to new opportunities and
            collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-slate-800 rounded-lg p-8 text-white border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <motion.a
                href="mailto:gurun0488@gmail.com"
                className="flex items-center gap-4 mb-6 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">
                    gurun0488@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/No12ah-a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-6 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Github className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="font-medium">
                    github.com/No12ah-a
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/gurun0488"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-6 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="font-medium">
                    linkedin.com/in/gurun0488
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://edemy-7wax.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-6 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Live Project</p>
                  <p className="font-medium">
                    Edemy LMS
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-slate-800 rounded-lg p-8 border border-slate-700"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Quick Links
              </h3>

              <div className="space-y-4">
                <motion.button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "https://drive.google.com/file/d/1Gx5Ua88zHfnOpYYs8PhflUe7VwuNQ2uj/view?usp=sharing";
                    link.download = "Guru_Anand_Resume.pdf";
                    link.click();
                  }}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Resume
                </motion.button>

                <motion.button
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="w-full py-3 px-6 border-2 border-slate-600 text-slate-300 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Top
                </motion.button>
              </div>

              <motion.div
                className="mt-8 p-6 bg-slate-700/50 rounded-lg border border-slate-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <p className="text-slate-300 text-center italic font-light">
                  "Constantly pushing the boundaries of what's
                  possible with technology."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mt-16 pt-8 border-t border-slate-700"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-400 font-light">
            © 2026 Guru Anand. Built with React, Tailwind CSS, and Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}