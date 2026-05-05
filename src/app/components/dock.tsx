import { motion } from "motion/react";
import { Home, Briefcase, Sparkles, Mail, Github } from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "#top", color: "from-blue-400 to-blue-600" },
  { icon: Briefcase, label: "Work", href: "#work", color: "from-orange-400 to-rose-500" },
  { icon: Sparkles, label: "Skills", href: "#personality", color: "from-emerald-400 to-teal-600" },
  { icon: Mail, label: "Contact", href: "#contact", color: "from-purple-400 to-pink-500" },
];

export function Dock() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-end gap-2 px-3 py-2 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/40 dark:border-neutral-700/40 shadow-2xl">
        {items.map((it) => (
          <motion.a
            key={it.label}
            href={it.href}
            whileHover={{ y: -10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="group relative"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${it.color} flex items-center justify-center shadow-lg`}>
              <it.icon size={22} className="text-white" />
            </div>
            <span
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-neutral-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              style={{ fontSize: "11px" }}
            >
              {it.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
