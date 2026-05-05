import { motion } from "motion/react";
import { ReactNode } from "react";

interface MacWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  bodyClassName?: string;
}

export function MacWindow({ title, children, className = "", delay = 0, bodyClassName = "" }: MacWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ${className}`}
    >
      {title && (
        <div className="flex items-center justify-center px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur">
          <div className="text-neutral-400 dark:text-neutral-500 select-none" style={{ fontSize: "12px", letterSpacing: "0.01em" }}>
            {title}
          </div>
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </motion.div>
  );
}