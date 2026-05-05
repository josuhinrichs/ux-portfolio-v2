import { motion } from "motion/react";
import { useState } from "react";
import { MacWindow } from "./mac-window";
import { ArrowUpRight, MousePointerClick, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./project-modal";
import { projects } from "../data/project-data";
import type { Project } from "../data/project-data";

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10 px-2"
        >
          <div>
            <div className="text-neutral-500 flex items-center gap-2" style={{ fontSize: "13px" }}>
              <span className="w-2 h-2 rounded-full bg-rose-400" /> ~/projects
            </div>
            <h2 className="mt-1" style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
              Selected{" "}
              <span className="italic" style={{ fontFamily: "Georgia, serif" }}>work</span>
            </h2>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 text-neutral-500" style={{ fontSize: "13px" }}>
            <MousePointerClick size={14} /> click to open case study
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              whileHover={{ y: -6 }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
              onClick={() => setSelected(p)}
              className="cursor-pointer"
            >
              <MacWindow
                title={(p.shortTitle ?? p.title).toLowerCase().replace(/\s/g, "-") + ".fig"}
                delay={i * 0.1}
              >
                <div className="group">
                  {/* Card image */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ backgroundColor: p.bg || "#f0f0f0" }}
                  >
                    {p.img && (
                      <ImageWithFallback
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}

                    {/* Timeline badge */}
                    {p.confidential && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur shadow-lg group-hover:bg-yellow-300 transition-colors"
                        style={{ fontSize: "11px", fontWeight: 600 }}
                      >
                       <span
                          className="inline-flex items-center gap-1 px-2 py-1"
                          style={{ fontSize: "11px" }}
                        >
                          <Lock size={10} /> NDA
                        </span>
                      </motion.div>
                    )}

                    {/* Hover CTA overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                      <span className="text-white inline-flex items-center gap-2" style={{ fontSize: "13px", fontWeight: 500 }}>
                        Open case study <ArrowUpRight size={14} />
                      </span>
                    </div>

                    {/* First impact badge — bottom left */}
                    {p.impacts && p.impacts.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                        className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm pointer-events-none"
                        style={{ fontSize: "12px" }}
                      >
                        <span
                          className="text-neutral-900 dark:text-white"
                          style={{ fontWeight: 700 }}
                        >
                          {p.impacts[0].value}
                        </span>
                        <span
                          className="text-neutral-500 dark:text-neutral-400"
                          style={{ fontWeight: 400 }}
                        >
                          {p.impacts[0].label}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 style={{ fontSize: "22px", fontWeight: 500, letterSpacing: "-0.01em" }}>
                        {p.shortTitle ?? p.title}
                      </h3>
                    </div>

                    {p.tag && (
                      <p
                        className="text-neutral-400 dark:text-neutral-500 tracking-widest"
                        style={{ fontSize: "10px", fontWeight: 600 }}
                      >
                        {p.tag}
                      </p>
                    )}

                    {p.desc && (
                      <p
                        className="mt-3 text-neutral-700 dark:text-neutral-300"
                        style={{ fontSize: "14px", lineHeight: 1.6 }}
                      >
                        {p.desc}
                      </p>
                    )}

                    {/* Tools chips */}
                    {p.tools && p.tools.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            style={{ fontSize: "11px" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </MacWindow>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}