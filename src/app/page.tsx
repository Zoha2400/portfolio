import Statues from "@/components/ui/Statues";
import AnimatedLine from "@/components/ui/AnimatedLine";
import Console from "@/components/ui/Console";
import Drag from "@/components/ui/Drag";
import Projects from "@/components/ui/Projects";
import AboutMe from "@/components/ui/AboutMe";

export default function Home() {
  return (
    <div className=" overflow-hidden">
        <Console />
        <Statues />
        <Projects />
        <AboutMe/>
    </div>
  );
}
