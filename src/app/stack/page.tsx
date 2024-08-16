import StackEl from "@/components/ui/StackEl";

function Page() {
  return (
    <div className="text-white p-8 font-mono">
      <p className="mb-5">
        If you wanted to order a website, but couldn't find the right person for
        this job - Congratulations, you found me!
      </p>

      <div className="stack flex gap-2 text-sm">
        <StackEl icon_name="devicon:react" name="React" color="#4b60ce" />
        <StackEl icon_name="devicon:nodejs" name="Node.js" color="#1a6335" />
        <StackEl
          icon_name="devicon:typescript"
          name="TypeScript"
          color="#022954"
        />
      </div>
    </div>
  );
}

export default Page;
