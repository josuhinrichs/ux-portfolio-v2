import { motion } from "motion/react";
import { MacWindow } from "./mac-window";

const items = [
  {
    quote:
      "Josué turns chaotic problems into shipping-ready interfaces faster than anyone I've worked with. Genuinely one of a kind.",
    name: "Sarah Chen",
    role: "VP Product · Linear",
    initials: "SC",
    color: "from-purple-200 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-900/40",
  },
  {
    quote:
      "A rare designer who pairs taste with rigor. The redesign moved every key metric in the right direction. Hire on sight.",
    name: "Marcus Wright",
    role: "Head of Design · Stripe",
    initials: "MW",
    color: "from-amber-200 to-rose-200 dark:from-amber-900/40 dark:to-rose-900/40",
  },
  {
    quote:
      "Clear thinker, beautiful craft, zero ego. Josué elevated our entire product surface area in 6 months.",
    name: "Priya Raman",
    role: "CEO · North Logistics",
    initials: "PR",
    color: "from-emerald-200 to-teal-200 dark:from-emerald-900/40 dark:to-teal-900/40",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 px-2"
        >
          <div className="text-neutral-500 flex items-center gap-2" style={{ fontSize: "13px" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> ~/kind-words
          </div>
          <h2 className="mt-1" style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
            People I've worked <span className="italic" style={{ fontFamily: "Georgia, serif" }}>together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -6, rotate: 0 }}
              initial={{ rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <MacWindow title={`note-${i + 1}.md`} delay={i * 0.1} bodyClassName="p-6">
                <div className={`bg-gradient-to-br ${t.color} -mx-6 -mt-6 px-6 pt-5 pb-8 mb-5 rounded-b-3xl`}>
                  <div className="text-5xl drop-shadow-sm">"</div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 -mt-2" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                  {t.quote}
                </p>
                <div className="mt-5 pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 select-none" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 500 }}>{t.name}</div>
                    <div className="text-neutral-500" style={{ fontSize: "12px" }}>{t.role}</div>
                  </div>
                </div>
              </MacWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}