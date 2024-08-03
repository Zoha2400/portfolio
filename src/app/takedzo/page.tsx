import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className="text-white">
      <header className="w-full h-32 bg-white-400 flex justify-center items-center bg-white text-black text-4xl font-italic duration-150 hover:bg-red-100 hover:h-36">
        <Link className=" animate-pulse flex gap-2" href={"/"}>
          Return to the{" "}
          <span className="block font-light text-red-700 scale-x-[-1] duration-500 hover:scale-x-[1]">
            homepage
          </span>{" "}
          from this shizo point...
        </Link>
      </header>

      <section className="w-full h-auto p-5 flex gap-10">
        <Image
          src="/me.JPEG"
          alt="Phone of Console"
          className={`transition h-fit w-auto  rounded-xl`}
          objectFit="contain"
          width={500}
          height={300}
        />

        <p className="p-10 text-3xl font-mono">
          <span className="text-5xl">Don't Say U want to know it...</span>{" "}
          <br />
          <br />
          Well... In the mystical year of 2019, I embarked on a journey through
          the labyrinthine realms of programming. What began as a mere dalliance
          evolved into a grand odyssey of digital alchemy, weaving code spells
          with fellow cyber-warriors. My mind, a sponge of the cosmos, absorbs
          the arcane knowledge with swiftness, while my patience with the team’s
          blunders is as vast as the universe itself. Yet, beware! The void of
          missing specifications is my arch-nemesis, a chaos I refuse to endure.
          Fear not, for in times of need, I metamorphose into the guardian of
          tasks, wielding my keyboard with valiant resolve.
          <br />
          <br />
          <span className="text-5xl">
            {" "}
            <span className="animate-bounceSlow block">← </span> Yeah, That's
            ME!
          </span>
          <br />
          <br />
          <br />
          <p>
            My GitHub -{" "}
            <a href="https://github.com/Zoha2400" className="text-blue-500">
              Pong😇
            </a>
          </p>
          <br />
          <br />
          <p className="flex gap-4 items-center">
            Okay, now stop scrolling and go back to the{" "}
            <code className="p-2 bg-slate-800 rounded-lg">
              <Link href={"/"} className="block font-light text-red-400">
                homepage
              </Link>
            </code>
            , mate.
          </p>
        </p>
      </section>
    </div>
  );
}

export default page;
