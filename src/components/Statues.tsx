import Image from "next/image";
function Statues() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full flex justify-between  mt-40 bg-black ">
        <Image
          src="/simone.png"
          alt="Phone of Console"
          className={`transition w-auto h-96 scale-x-[-1]`}
          objectFit="contain"
          width={500}
          height={300}
        />
        <div className="text h-96 relative flex flex-col justify-between">
          <p className="text-6xl text-gray-900 absolute z-0 m-40">
            Driven by the absurd, crafting digital wonders.
          </p>
          <p className="text-6xl text-gray-700 absolute z-10 scale-x-[-1] m-20">
            Driven by the absurd, crafting digital wonders.
          </p>
          <p className="text-6xl z-20 text-white font-bold">
            Driven by the absurd, crafting digital wonders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statues;

// #f6f7fb
