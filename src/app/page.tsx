import Statues from "@/components/Statues";
import AnimatedLine from "@/components/ui/AnimatedLine";
import Console from "@/components/ui/Console";
import Drag from "@/components/ui/Drag";

export default function Home() {
  return (
    <div>
      <Drag />
      <Console />
      <Statues />
    </div>
  );
}
