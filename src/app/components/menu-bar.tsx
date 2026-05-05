import { motion } from "motion/react";
import { Apple, Wifi, BatteryFull, Search } from "lucide-react";
import { useEffect, useState } from "react";

export function MenuBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) +
          "  " +
          d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="flex items-center justify-between px-5 py-1.5" style={{ fontSize: "13px" }}>
        <div className="flex items-center gap-5">
          <span style={{ fontWeight: 600 }}>Portfolio</span>
          <span className="hidden sm:inline text-neutral-600 dark:text-neutral-400">File</span>
          <span className="hidden sm:inline text-neutral-600 dark:text-neutral-400">View</span>
          <span className="hidden md:inline text-neutral-600 dark:text-neutral-400">Window</span>
          <span className="hidden md:inline text-neutral-600 dark:text-neutral-400">Help</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
          <Search size={14} />
          <Wifi size={14} />
          <BatteryFull size={14} />
          <span className="tabular-nums">{time}</span>
        </div>
      </div>
    </motion.div>
  );
}
