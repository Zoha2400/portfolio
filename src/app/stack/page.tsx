import StackEl from "@/components/ui/StackEl";
import Image from "next/image";

import { Icon } from "@iconify/react/dist/iconify.js";

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
  // { icon_name: "devicon:photoshop", name: "Photoshop", color: "#004781" },
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

        <div className="w-full h-[30rem] relative bg-[url('/makima.jpg')] bg-center bg-cover overflow-hidden rounded-3xl mt-5">
          {/* <Image
            className="absolute -z-10 h-fll w-full "
            src="/makima.jpg?v=2"
            alt="Background Image"
            width={500}
            height={500}
            quality={100}
            unoptimized
          /> */}
          <div className="bg-[#ffffff]/25 m-10 backdrop-blur-[7.5px] relative rounded-2xl overflow-hidden border border-white/20 p-6 text-white max-w-4xl mx-auto mt-10 w-3/4 md:w-4/12 shadow-2xl">
            <div className="design absolute w-60 h-60 top-0 right-0">
              <div className="animate-ping duration-75 sun absolute w-20 z-50 h-20 -top-10 -right-10 bg-orange-100 rounded-full"></div>
              <div className="sun absolute w-20 z-50 h-20 -top-10 -right-10 bg-orange-100 rounded-full"></div>

              <div className="f1 absolute w-32 h-32 z-40 -top-16 -right-16 bg-orange-300 rounded-full"></div>
              <div className="f2 absolute w-40 h-40 z-30 -top-20 -right-20 bg-orange-400 rounded-full"></div>
              <div className="f3 absolute w-48 h-48 z-20 -top-24 -right-24 bg-purple-800 rounded-full"></div>
              <div className=" absolute w-64 h-64 z-10 -top-32 -right-32 bg-purple-700 rounded-full">
                <div className="orbitalball w-10 h-10 animate-bounceSlow bg-white rounded-full absolute bottom-0 animation-spin transform translate-x-neg-50 shadow-inner-custom-ball"></div>
              </div>
              <div className="oxygen1 absolute w-80 h-80 z-0 -top-40 -right-40 bg-purple-900 rounded-full"></div>
            </div>

            <h2 className=" font-bold text-xl mb-4">Contact me now!</h2>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-10 h-10 bg-[#43b7f3] text-2xl flex justify-center items-center text-white rounded"
              >
                <Icon icon="icon-park-outline:telegram" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#5865f2] text-2xl flex justify-center items-center text-white rounded"
              >
                <Icon icon="carbon:logo-discord" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#000000] text-2xl flex justify-center items-center text-white rounded"
              >
                <Icon icon="fa6-brands:x-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
