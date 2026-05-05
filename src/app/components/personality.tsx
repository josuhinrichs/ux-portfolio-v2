import { motion } from "motion/react";
import { MacWindow } from "./mac-window";
import { Search, Layers, GitBranch, Globe } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "UX Research & Strategy",
    description:
      "I validate ideas before a single pixel is drawn. Through interviews, usability tests, and contextual inquiry, I reduce risk and build with evidence.",
  },
  {
    icon: Layers,
    title: "UI Design & Prototyping",
    description:
      "From wireframes to high-fidelity prototypes — I deliver interfaces that are both precise in detail and coherent at the system level.",
  },
  {
    icon: GitBranch,
    title: "Design Systems",
    description:
      "I build scalable component libraries and token architectures that let teams ship consistently without losing craft or velocity.",
  },
  {
    icon: Globe,
    title: "Software Engineering Understanding",
    description:
      "Having graduated in Computer Science and worked as a software engineer at the start of my career facilitates communicating with developers and across other teams.",
  },
];

export function Personality() {
  return (
    <section id="personality" className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 px-2"
        >
          <div className="text-neutral-500 flex items-center gap-2" style={{ fontSize: "13px" }}>
            <span className="w-2 h-2 rounded-full bg-amber-400" /> ~/skills
          </div>
          <h2 className="mt-1" style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
            What I{" "}
            <span className="italic" style={{ fontFamily: "Georgia, serif" }}>do</span>
          </h2>
          <p className="mt-2 text-neutral-500" style={{ fontSize: "14px" }}>
            The full stack of a product designer who cares about outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring" }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                <s.icon size={18} className="text-neutral-700 dark:text-neutral-300" />
              </div>
              <div style={{ fontSize: "16px", fontWeight: 500, marginBottom: "8px" }}>{s.title}</div>
              <div className="text-neutral-500 dark:text-neutral-400" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                {s.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}