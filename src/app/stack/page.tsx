import StackEl from "@/components/ui/StackEl";
import Image from "next/image";

const stackEls = [
  { icon_name: "devicon:react", name: "React", color: "#4b60ce" },
  { icon_name: "devicon:nextjs", name: "Next.js", color: "#252525" },
  { icon_name: "devicon:nestjs", name: "Nest.js", color: "#7f1340" },
  { icon_name: "devicon:flask", name: "Flask", color: "#b8b8b8" },
  { icon_name: "devicon:python", name: "Python", color: "#004781" },
  { icon_name: "devicon:javascript", name: "JavaScript", color: "#bbb200" },
  { icon_name: "devicon:postgresql", name: "PostgreSQL", color: "#4c00bf" },
  { icon_name: "devicon:css3", name: "CSS", color: "#004781" },
  { icon_name: "devicon:html5", name: "HTML", color: "#975f00" },
  { icon_name: "devicon:sass", name: "SASS", color: "#463737" },
  { icon_name: "devicon:tailwindcss", name: "Tailwind", color: "#103da0" },
  { icon_name: "devicon:github", name: "GitHub", color: "rgb(68, 68, 68)" },
  { icon_name: "devicon:git", name: "Git", color: "rgb(102, 44, 0)" },
  { icon_name: "devicon:jira", name: "Jira", color: "rgb(0, 39, 80)" },
  { icon_name: "devicon:docker", name: "Docker", color: "#004781" },
  { icon_name: "devicon:kubernetes", name: "Kubernetes", color: "#004781" },
  { icon_name: "devicon:nodejs", name: "Node.js", color: "#1a6335" },
  { icon_name: "devicon:typescript", name: "TypeScript", color: "#022954" },
  { icon_name: "devicon:vite", name: "Vite", color: "#004781" },
  { icon_name: "devicon:webpack", name: "Webpack", color: "#004781" },
  { icon_name: "devicon:rust", name: "Rust", color: "#004781" },
  { icon_name: "devicon:vuejs", name: "Vue3", color: "#004781" },
  { icon_name: "devicon:svelte", name: "Svelte", color: "#004781" },
  { icon_name: "devicon:mobx", name: "Mobx", color: "#004781" },
  { icon_name: "devicon:redux", name: "Redux", color: "#004781" },
  { icon_name: "devicon:sequelize", name: "Sequelize", color: "#004781" },
  {
    icon_name: "devicon:materializecss",
    name: "Materialize",
    color: "#004781",
  },
  { icon_name: "devicon:bootstrap", name: "Bootstrap", color: "#004781" },
  { icon_name: "devicon:intellij", name: "IntelliJ", color: "#004781" },
  { icon_name: "devicon:insomnia", name: "Insomnia", color: "#004781" },
  { icon_name: "devicon:postman", name: "Postman", color: "#004781" },
  { icon_name: "devicon:json", name: "JSON", color: "#004781" },
  { icon_name: "devicon:express", name: "Express", color: "#004781" },
  { icon_name: "devicon:npm", name: "Npm", color: "#004781" },
  { icon_name: "devicon:yarn", name: "Yarn", color: "#004781" },
  { icon_name: "devicon:redis", name: "Redis", color: "#004781" },
  { icon_name: "devicon:rabbitmq", name: "RabbitMQ", color: "#004781" },
  { icon_name: "devicon:linux", name: "Linux", color: "#004781" },
  { icon_name: "devicon:ubuntu", name: "Ubuntu", color: "#004781" },
  { icon_name: "devicon:babel", name: "Babel", color: "#004781" },
  { icon_name: "devicon:materialui", name: "MaterialUi", color: "#004781" },
  { icon_name: "devicon:nginx", name: "Nginx", color: "#004781" },
  { icon_name: "devicon:cplusplus", name: "C++", color: "#004781" },
  { icon_name: "devicon:bun", name: "BunJs", color: "#004781" },
  { icon_name: "devicon:figma", name: "Figma", color: "#004781" },
  { icon_name: "devicon:photoshop", name: "Photoshop", color: "#004781" },
  { icon_name: "devicon:grpc", name: "gRPC", color: "#004781" },
  { icon_name: "devicon:ngrok", name: "Ngrok", color: "#004781" },
];

function Page() {
  return (
    <div className="text-white p-8 font-mono">
      <p className="mb-5">
        If you wanted to order a website, but couldn't find the right person for
        this job - Congratulations, you found me!
      </p>

      <div className="stack flex gap-2 flex-wrap text-sm">
        {stackEls.map((el) => {
          return (
            <StackEl icon_name={el.icon_name} name={el.name} color={el.color} />
          );
        })}

        <div className="w-full h-96 relative bg-[url('/makima.jpg')] bg-center bg-cover overflow-hidden rounded-xl mt-5">
          {/* <Image
            className="absolute -z-10 h-fll w-full "
            src="/makima.jpg?v=2"
            alt="Background Image"
            width={500}
            height={500}
            quality={100}
            unoptimized
          /> */}
          <div className="bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[7.5px] rounded-lg border border-white/20 p-8 text-white max-w-4xl mx-auto mt-10 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Contact me now!</h2>
            <div className="space-x-4">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Telegram
              </a>
              <a
                href="#"
                className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Twitter
              </a>
              <a
                href="#"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
