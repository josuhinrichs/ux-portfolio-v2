import { motion, AnimatePresence } from "motion/react";
import { X, Lock, ArrowUpRight, Lightbulb, XCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect } from "react";
import type { Project, ProcessPhase } from "../data/project-data";

export type { Project };

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onEsc);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-neutral-900/40 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 24, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl my-auto"
          >
            {/* macOS window chrome */}
            <div className="sticky top-0 z-20 flex items-center gap-3 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"
                  aria-label="Close"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-green-400 opacity-60" />
              </div>

              <div className="flex-1 text-center text-neutral-500 flex items-center justify-center gap-2" style={{ fontSize: "13px" }}>
                <span className="truncate max-w-[200px] md:max-w-none">
                  {project.slug}.case-study
                </span>
                {project.confidential && (
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 shrink-0"
                    style={{ fontSize: "10px" }}
                  >
                    <Lock size={9} /> NDA
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto max-h-[85vh]">
              {/* Hero image */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{ backgroundColor: project.bg || "#f5f5f5" }}
              >
                {project.img && (
                  <ImageWithFallback
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6 md:p-10">
                {/* Tag + Title + Desc — always visible */}
                {project.tag && (
                  <div
                    className="text-neutral-500 dark:text-neutral-400 mb-3 tracking-widest"
                    style={{ fontSize: "10px", fontWeight: 600 }}
                  >
                    {project.tag}
                  </div>
                )}
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h2>
                {project.desc && (
                  <p
                    className="mt-3 text-neutral-600 dark:text-neutral-400"
                    style={{ fontSize: "16px", lineHeight: 1.6 }}
                  >
                    {project.desc}
                  </p>
                )}

                {project.fullDesc && (
                  <ul className="mt-4 space-y-2.5">
                    {project.fullDesc
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li
                          key={i}
                          className="flex gap-3 items-start text-neutral-500 dark:text-neutral-500"
                          style={{ fontSize: "15px", lineHeight: 1.75 }}
                        >
                          <span className="mt-[9px] shrink-0 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                          <span>{line.replace(/^•\s*/, "")}</span>
                        </li>
                      ))}
                  </ul>
                )}

                {/* Impact highlights */}
                {project.impacts && project.impacts.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.impacts.map((impact, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ede8de] dark:bg-neutral-800"
                        style={{ fontSize: "13px" }}
                      >
                        <span
                          className="text-neutral-900 dark:text-white"
                          style={{ fontWeight: 700 }}
                        >
                          {impact.value}
                        </span>
                        <span
                          className="text-neutral-600 dark:text-neutral-400"
                          style={{ fontWeight: 400 }}
                        >
                          {impact.label}
                        </span>
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Meta row — always visible */}
                {(project.role || project.team || project.timeline) && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.role && <MetaPill label="Role" value={project.role} />}
                    {project.team && <MetaPill label="Team" value={project.team} />}
                    {project.timeline && <MetaPill label="Timeline" value={project.timeline} />}
                  </div>
                )}

                {/* Tools + Deliverables — always visible */}
                {(project.tools || project.deliverables) && (
                  <div className="flex flex-col gap-4 mt-6">
                    {project.tools && (
                      <ChipRow label="Tools" items={project.tools} />
                    )}
                    {project.deliverables && (
                      <ChipRow label="Deliverables" items={project.deliverables} />
                    )}
                  </div>
                )}

                {/* === BLUR GATE === */}
                <div className="relative mt-10">
                  <div
                    className={
                      project.confidential
                        ? "select-none blur-[12px] pointer-events-none"
                        : ""
                    }
                    aria-hidden={project.confidential}
                  >
                    {/* Challenge */}
                    {(project.challenge || project.constraints || project.hypothesis) && (
                      <Section title="The challenge">
                        {project.challenge && (
                          <p style={{ lineHeight: 1.75 }}>{project.challenge}</p>
                        )}
                        {project.challengeQuote && (
                          <blockquote
                            className="mt-5 pl-4 border-l-2 border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 italic"
                            style={{ fontSize: "15px", lineHeight: 1.7 }}
                          >
                            {project.challengeQuote}
                          </blockquote>
                        )}
                        {project.constraints && project.constraints.length > 0 && (
                          <div className="mt-5">
                            <p
                              className="text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-widest"
                              style={{ fontSize: "10px", fontWeight: 600 }}
                            >
                              Constraints
                            </p>
                            <ul className="space-y-2">
                              {project.constraints.map((c, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                                  <span
                                    className="text-neutral-700 dark:text-neutral-300"
                                    style={{ fontSize: "14px", lineHeight: 1.65 }}
                                  >
                                    {c}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.hypothesis && (
                          <div className="mt-5 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                            <p
                              className="text-neutral-500 dark:text-neutral-400 mb-1.5 uppercase tracking-widest"
                              style={{ fontSize: "10px", fontWeight: 600 }}
                            >
                              Design hypothesis
                            </p>
                            <p
                              className="text-neutral-700 dark:text-neutral-300"
                              style={{ fontSize: "14px", lineHeight: 1.7 }}
                            >
                              {project.hypothesis}
                            </p>
                          </div>
                        )}
                      </Section>
                    )}

                    {/* Rejected directions */}
                    {project.rejectedDirections && project.rejectedDirections.length > 0 && (
                      <Section title="Directions explored and rejected">
                        <div className="space-y-3">
                          {project.rejectedDirections.map((rd, i) => (
                            <div
                              key={i}
                              className="flex gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
                            >
                              <XCircle
                                size={16}
                                className="shrink-0 mt-0.5 text-neutral-400 dark:text-neutral-500"
                              />
                              <div>
                                {rd.title && (
                                  <p
                                    className="text-neutral-800 dark:text-neutral-200"
                                    style={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    {rd.title}
                                  </p>
                                )}
                                {rd.reason && (
                                  <p
                                    className="mt-1 text-neutral-500 dark:text-neutral-400"
                                    style={{ fontSize: "13px", lineHeight: 1.65 }}
                                  >
                                    {rd.reason}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* Process phases */}
                    {project.process && project.process.length > 0 && (
                      <Section title="Process">
                        <div className="space-y-12">
                          {project.process.map((phase, i) => (
                            <PhaseBlock key={i} phase={phase} />
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* Outcome */}
                    {project.outcome && (
                      <Section title={project.outcome.title ?? "Outcome"}>
                        {project.outcome.metrics && project.outcome.metrics.length > 0 && (
                          <div
                            className={`grid gap-3 ${
                              project.outcome.metrics.length <= 2
                                ? "grid-cols-2"
                                : project.outcome.metrics.length === 3
                                ? "grid-cols-3"
                                : "grid-cols-2 md:grid-cols-4"
                            }`}
                          >
                            {project.outcome.metrics.map((m, i) => (
                              <div
                                key={i}
                                className="p-4 md:p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
                              >
                                <div
                                  className="text-neutral-900 dark:text-white"
                                  style={{
                                    fontSize: "clamp(22px, 3vw, 30px)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.02em",
                                  }}
                                >
                                  {m.value}
                                </div>
                                <div
                                  className="text-neutral-500 mt-1"
                                  style={{ fontSize: "12px" }}
                                >
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {project.outcome.summary && (
                          <p
                            className="mt-5 text-neutral-700 dark:text-neutral-300"
                            style={{ fontSize: "15px", lineHeight: 1.75 }}
                          >
                            {project.outcome.summary}
                          </p>
                        )}
                      </Section>
                    )}

                    {/* Footer CTA */}
                    <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <span
                        className="text-neutral-500"
                        style={{ fontSize: "13px" }}
                      >
                        Want to discuss this work?
                      </span>
                      <a
                        href="#contact"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:scale-[1.03] transition-transform"
                        style={{ fontSize: "13px" }}
                      >
                        Get in touch <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* NDA overlay */}
                  {project.confidential && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.35 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="text-center px-6 py-10 max-w-sm mx-auto">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mx-auto mb-5 shadow-sm">
                          <Lock
                            size={20}
                            className="text-neutral-500 dark:text-neutral-400"
                          />
                        </div>
                        <p
                          style={{
                            fontSize: "17px",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          This case study is under NDA
                        </p>
                        <p
                          className="mt-2 text-neutral-500 dark:text-neutral-400"
                          style={{ fontSize: "14px", lineHeight: 1.65 }}
                        >
                          {project.confidentialNote ||
                            ""}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Sub-components ─────────────────────────────────────────────── */

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 min-w-0">
      <div
        className="text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-0.5"
        style={{ fontSize: "10px", fontWeight: 600 }}
      >
        {label}
      </div>
      <div
        className="text-neutral-800 dark:text-neutral-200"
        style={{ fontSize: "13px", lineHeight: 1.4 }}
      >
        {value}
      </div>
    </div>
  );
}

function ChipRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="text-neutral-400 dark:text-neutral-500 uppercase tracking-widest shrink-0"
        style={{ fontSize: "10px", fontWeight: 600 }}
      >
        {label}
      </span>
      {items.map((item) => (
        <span
          key={item}
          className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          style={{ fontSize: "12px" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h3
        className="mb-5"
        style={{ fontSize: "20px", fontWeight: 500, letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <div
        className="text-neutral-700 dark:text-neutral-300"
        style={{ fontSize: "15px" }}
      >
        {children}
      </div>
    </div>
  );
}

function PhaseBlock({ phase }: { phase: ProcessPhase }) {
  return (
    <div>
      {phase.phase && (
        <div
          className="text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1"
          style={{ fontSize: "10px", fontWeight: 600 }}
        >
          {phase.phase}
        </div>
      )}
      {phase.title && (
        <h4
          className="text-neutral-900 dark:text-white mb-3"
          style={{ fontSize: "17px", fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          {phase.title}
        </h4>
      )}
      {phase.body && (
        <p
          className="text-neutral-600 dark:text-neutral-400"
          style={{ fontSize: "15px", lineHeight: 1.75 }}
        >
          {phase.body}
        </p>
      )}
      {phase.insight && (
        <div className="mt-4 flex gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30">
          <Lightbulb
            size={15}
            className="shrink-0 mt-0.5 text-amber-500 dark:text-amber-400"
          />
          <p
            className="text-amber-800 dark:text-amber-300"
            style={{ fontSize: "13px", lineHeight: 1.65 }}
          >
            {phase.insight}
          </p>
        </div>
      )}
      {phase.imgs && phase.imgs.length > 0 && (
        <div className="mt-4">
          {phase.imgLayout === "duo" ? (
            <div className="grid grid-cols-2 gap-3">
              {phase.imgs.slice(0, 2).map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
                >
                  <ImageWithFallback
                    src={src}
                    alt={`Phase image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <ImageWithFallback
                src={phase.imgs[0]}
                alt="Phase image"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}