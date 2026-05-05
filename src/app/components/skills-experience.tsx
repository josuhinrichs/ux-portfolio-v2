import { motion } from "motion/react";
import { MacWindow } from "./mac-window";

const tools = [
  "Figma", "Jira", "Confluence", "Illustrator",
  "Figjam", "Miro", "AMP", "Figma Make",
];

const disciplines = [
  "User Research", "Interaction Design", "Design Systems",
  "Prototyping", "Information Architecture", "Usability Testing",
  "Motion Design", "Visual Design", "Design Leadership",
  "Design Ops", "Product Strategy", "Content Design", "Design Thinking",
];

const experience = [
  { company: "Freelance / Remote", role: "Senior Product Designer", years: "2022 — Now", color: "bg-neutral-900 dark:bg-neutral-100" },
  { company: "Lenovo", role: "Product Designer", years: "2020 — 2022", color: "bg-blue-500" },
  { company: "Studio Contracts", role: "UX/UI Designer", years: "2018 — 2020", color: "bg-indigo-500" },
  { company: "Early Career", role: "Junior Designer", years: "2016 — 2018", color: "bg-neutral-400" },
];

export function SkillsExperience() {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-6">
        <MacWindow title="toolkit.json" bodyClassName="p-6">
          <div className="text-neutral-500 mb-5 flex items-center gap-2" style={{ fontSize: "13px" }}>
            <span>$</span> core competencies
            <span className="ml-auto px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400" style={{ fontSize: "10px" }}>
              ● running
            </span>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-neutral-400 dark:text-neutral-500 tracking-widest mb-3" style={{ fontSize: "10px", fontWeight: 600 }}>
                TOOLS
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    style={{ fontSize: "14px" }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* UX Disciplines */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-neutral-400 dark:text-neutral-500 tracking-widest mb-3" style={{ fontSize: "10px", fontWeight: 600 }}>
                UX DISCIPLINES
              </p>
              <div className="flex flex-wrap gap-1.5">
                {disciplines.map((d, i) => (
                  <motion.span
                    key={d}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                    className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    style={{ fontSize: "14px" }}
                  >
                    {d}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
}