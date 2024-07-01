import Image from "next/image";
import brand from "../../img/brand.PNG";
import Link from "next/link";

function Drag() {
  return (
    <div className="w-full h-52 bg-red-200 container-wrap flex justify-center items-center">
      <div className="mt-10 w-11/12">
        <header className="">
          <nav className="flex justify-between">
            <div className="brend text-blue-700 flex justify-center items-center w-52 relative">
              <p className="flex flex-col leading-5">
                {" "}
                Portfolio <span className="text-red-500 ml-2">Portfolio</span>
                <span className="text-purple-950 -ml-2">Portfolio</span>
              </p>
              <Image
                src={brand}
                alt="Brand"
                className="absolute w-40 h-auto animate-bounceSlow"
              />
            </div>

            <div className="flex gap-10 text-3xl text-gray-900">
              <Link href={"/posts"}>posts</Link>
              <Link href={"/takedzo"}>'bout me</Link>

              <Link href={"/stack"}>website</Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Drag;
