import { motion } from "motion/react";
import { MacWindow } from "./mac-window";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Hero() {
  const marqueeItems = [
    "Product Design",
    "·",
    "User Research",
    "·",
    "Design Systems",
    "·",
    "Prototyping",
    "·",
    "Figma",
    "·",
    "Strategy",
    "·",
    "Remote-First",
    "·",
    "Accessibility",
    "·",
    "Brazilian | German",
    "·",
    "M.Sc in progress",
    "·",
  ];

  return (
    <section className="px-6 md:px-12 pt-14 md:pt-28 pb-12 relative">
      <div className="max-w-6xl mx-auto">
        <MacWindow title="josue-hinrichs — portfolio" bodyClassName="p-8 md:p-14 relative overflow-hidden">
                {/* Floating stickers */}
          {/* <motion.div
            animate={{ y: [0, -12, 0], rotate: [-6, -2, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-40 hidden md:block"
          >
            <div className="px-3 py-1.5 rounded-full bg-yellow-300 text-neutral-900 shadow-lg" style={{ fontSize: "12px", fontWeight: 600 }}>
              pixel pusher
            </div>
          </motion.div> */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [8, 4, 8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-6 hidden md:block"
          >
            <div className="px-3 py-1.5 rounded-full bg-lime-300 text-neutral-900 shadow-lg" style={{ fontSize: "12px", fontWeight: 600 }}>
              caffeine-driven
            </div>
          </motion.div>

           <motion.div
            animate={{ y: [0, -12, 0], rotate: [-6, -2, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-40 hidden md:block"
          >
            <div className="px-3 py-1.5 rounded-full bg-blue-600 text-white shadow-lg" style={{ fontSize: "12px", fontWeight: 600 }}>
              EU Citizen
            </div>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end relative">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 mb-6"
                style={{ fontSize: "13px" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Working remotely
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.02, fontWeight: 500 }}
              >
                Product designer{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic" style={{ fontFamily: "Georgia, serif" }}>shaping</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute inset-x-0 bottom-1 h-3 bg-yellow-300 -z-0 origin-left"
                  />
                </span>{" "}
                interfaces
                <br />
                that work for{" "}
                <span className="italic" style={{ fontFamily: "Georgia, serif" }}>people,</span>{" "}
                <span className="text-neutral-400 dark:text-neutral-600">not just screens.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-xl"
                style={{ fontSize: "17px", lineHeight: 1.6 }}
              >
                Hi, I'm{" "}
                <span className="text-neutral-900 dark:text-neutral-100" style={{ fontWeight: 600 }}>Josué Hinrichs</span>{" "}
                — I help teams turn complex product ideas into interfaces that feel clear, reliable, and ready to ship — with the attention to details that users notice.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap items-center gap-3 mt-8"
              >
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:scale-[1.03] transition-transform shadow-lg"
                  style={{ fontSize: "14px" }}
                >
                  View selected work
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800 transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  Get in touch
                </motion.a>
                <div className="inline-flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 ml-2" style={{ fontSize: "13px" }}>
                  <MapPin size={14} /> Brazil → Germany · Remote
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10 flex flex-wrap gap-6 pt-6 border-t border-dashed border-neutral-300 dark:border-neutral-700"
              >
                {[
                  { n: "4+", l: "years designing" },
                  { n: "10+", l: "shipped products" },
                  { n: "M.Sc", l: "in progress" },
                  { n: "🇧🇷 + 🇩🇪", l: "2 Citizenships" },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontSize: "24px", fontWeight: 600, letterSpacing: "-0.02em" }}>{s.n}</div>
                    <div className="text-neutral-500" style={{ fontSize: "12px" }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Initials card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              whileHover={{ rotate: -3, scale: 1.05 }}
              className="hidden md:block"
            >
              <div className="relative w-52 h-64 rounded-2xl bg-gradient-to-br from-stone-200 via-neutral-100 to-slate-200 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700 p-1 shadow-2xl">
                <div className="w-full h-full rounded-xl bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  {/* Replace this src with your real photo */}
                  <img
                    src="profile.jpg"
                    alt="Josué Hinrichs"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <motion.div
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-3 -left-4 bg-white dark:bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-md"
                  style={{ fontSize: "12px" }}
                >
                  UX/UI Designer
                </motion.div>
              </div>
            </motion.div>
          </div>
        </MacWindow>

        {/* Marquee */}
        <div className="mt-6 overflow-hidden border-y border-dashed border-neutral-300 dark:border-neutral-700 py-3 -mx-6 md:-mx-12">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="flex w-max whitespace-nowrap"
            style={{ fontSize: "14px" }}
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8 pr-8">
                {marqueeItems.map((w, i) => (
                  <span key={`${copy}-${i}`} className="text-neutral-600 dark:text-neutral-400">
                    {w}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
