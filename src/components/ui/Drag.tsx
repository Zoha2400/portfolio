import Image from "next/image";
import brand from "../../img/brand.PNG";

function Drag() {
  return (
    <div className="w-full h-52 bg-red-200 container-wrap flex justify-center items-center">
      <div className="mt-10 w-11/12">
        <header className="">
          <nav className="brend text-blue-700 flex justify-center items-center w-52 relative">
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
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Drag;
