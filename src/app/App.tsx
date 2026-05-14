import { MenuBar } from "./components/menu-bar";
import { Dock } from "./components/dock";
import { Hero } from "./components/hero";
import { Work } from "./components/work";
import { SkillsExperience } from "./components/skills-experience";
import { Testimonials } from "./components/testimonials";
import { Personality } from "./components/personality";
import { Contact } from "./components/contact";
import { CustomCursor } from "../imports/CustomCursor";

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-gradient-to-b from-neutral-100 via-neutral-50 to-stone-100 dark:from-neutral-950 dark:to-black text-neutral-900 dark:text-neutral-100 overflow-x-hidden">
      <CustomCursor />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,180,120,0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(180,200,255,0.3), transparent 50%), radial-gradient(circle at 50% 80%, rgba(220,180,255,0.25), transparent 50%)",
        }}
      />
      <MenuBar />
      <main>
        <Hero />
        <div id="skills">
          <SkillsExperience />
        </div>
        <Work />
        <Personality />
        <Testimonials />
        <Contact />
      </main>
      <Dock />
    </div>
  );
}