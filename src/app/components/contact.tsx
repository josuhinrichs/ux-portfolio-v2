import { motion } from "motion/react";
import { MacWindow } from "./mac-window";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const BehanceIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.443 5.35c.639 0 1.23.05 1.77.198.541.099.984.297 1.377.544.394.247.689.594.886 1.039.197.445.296.99.296 1.583 0 .693-.148 1.286-.493 1.731-.296.445-.789.84-1.38 1.138.838.247 1.478.693 1.872 1.286.394.594.64 1.336.64 2.177 0 .693-.148 1.286-.395 1.78-.246.495-.64.94-1.084 1.237-.444.297-.985.544-1.575.693-.591.148-1.182.198-1.823.198H1V5.35h6.443zm-.394 5.54c.54 0 .984-.148 1.33-.395.345-.247.492-.693.492-1.187 0-.297-.049-.544-.148-.742-.099-.198-.247-.346-.444-.494-.197-.099-.394-.198-.64-.247-.247-.05-.493-.05-.739-.05H3.81v3.115h3.239zm.197 5.788c.296 0 .542-.05.788-.099.247-.05.493-.148.69-.297.196-.148.344-.346.492-.594.099-.247.148-.544.148-.89 0-.693-.197-1.187-.591-1.484-.394-.297-.935-.445-1.576-.445H3.81v3.81h3.436zm10.26-1.385c.393.396.984.594 1.77.594.542 0 1.034-.148 1.428-.396.394-.296.64-.594.739-.891h2.315c-.394 1.237-1.034 2.128-1.773 2.672-.788.544-1.722.841-2.856.841-.788 0-1.478-.148-2.118-.395-.64-.247-1.182-.594-1.625-1.039-.443-.445-.788-.99-1.034-1.633-.247-.643-.345-1.335-.345-2.078 0-.742.098-1.434.345-2.077.246-.643.59-1.188 1.034-1.682.443-.445.985-.841 1.625-1.088.64-.247 1.33-.396 2.118-.396.838 0 1.575.198 2.215.544.64.346 1.132.791 1.526 1.385.394.545.64 1.188.788 1.88.099.693.148 1.385.099 2.128H16.99c0 .841.295 1.484.787 1.879l-.271-.049zm4.13-5.953c-.345-.346-.886-.544-1.527-.544-.443 0-.788.099-1.083.247-.295.148-.542.346-.689.544-.197.198-.296.445-.345.643-.099.198-.099.396-.099.594h4.483c-.099-.791-.395-1.187-.74-1.484zM15.91 7.33h5.42v1.335h-5.42V7.33z" />
  </svg>
);

const links = [
  { icon: Mail, label: "josue2001marinho@gmail.com", href: "mailto:josue2001marinho@gmail.com", color: "bg-rose-100 dark:bg-rose-950/40" },
  { icon: Linkedin, label: "linkedin/josuehinrichs", href: "https://www.linkedin.com/in/josuhinrichs/", target: "_blank", color: "bg-blue-100 dark:bg-blue-950/40" },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 pb-32 relative">
      <div className="max-w-4xl mx-auto">
        <MacWindow title="contact.app" bodyClassName="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-50 to-purple-100 dark:from-orange-950/40 dark:via-rose-950/30 dark:to-purple-950/40" />

          <div className="relative p-10 md:p-16 text-center">
            <div className="text-neutral-600 dark:text-neutral-400 mb-3" style={{ fontSize: "13px" }}></div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Get{" "}
              <br />
              <span className="italic" style={{ fontFamily: "Georgia, serif" }}>in touch.</span>
            </h2>
            <p className="mt-5 text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              I typically respond within 24 hours.
            </p>
          <div className="gap-4 flex flex-wrap items-center justify-center">
            <motion.a
              href="mailto:josue2001marinho@gmail.com"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className="whitespace-nowrap group inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-2xl"
              style={{ fontSize: "15px" }}
            >
              Let's talk
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1iWG-S_HoeU-V4aMPEGWER_rWGNzjV2Mq/view?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className="whitespace-nowrap group inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-2xl"
              style={{ fontSize: "15px" }}
            >
              View my resume
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </motion.a>
          </div>

            <div className="mt-12 pt-8 border-t border-neutral-300/50 dark:border-neutral-700/50 grid sm:grid-cols-2 gap-2 max-w-xl mx-auto">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.target}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.35, delay: i * 0.05, ease: "easeOut" },
                  y: { duration: 0.35, delay: i * 0.05, ease: "easeOut" },
                  scale: { type: "spring", stiffness: 320, damping: 26, mass: 0.7 },
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:bg-white dark:hover:bg-neutral-900 transition-all text-left"
                  style={{ fontSize: "13px" }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${l.color}`}>
                    <l.icon size={14} />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 truncate">{l.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </MacWindow>

        <div className="text-center text-neutral-400 mt-8 flex items-center justify-center gap-2" style={{ fontSize: "12px" }}>
          <span>© 2026 Josué Hinrichs</span>
          <span>·</span>
          <span>Designed with care, shipped with intent.</span>
        </div>
      </div>
    </section>
  );
}