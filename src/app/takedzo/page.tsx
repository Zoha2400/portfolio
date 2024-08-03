import Link from "next/link";

function page() {
  return (
    <div className="text-white">
      <header className="w-full h-32 bg-white-400 flex justify-center items-center bg-white text-black text-4xl font-italic duration-150 hover:bg-red-400 ">
        <Link className=" animate-pulse" href={"/"}>
          Return to homepage from this shizo point...
        </Link>
      </header>
    </div>
  );
}

export default page;
