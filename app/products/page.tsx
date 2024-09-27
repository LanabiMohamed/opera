import exterior from "@public/productsTypes/exterior.png";
import interior from "@public/productsTypes/interior.png";
import steal from "@public/productsTypes/steal.png";
import waterInsulation from "@public/productsTypes/waterInsulation.png";
import wood from "@public/productsTypes/wood.png";
import Image from "next/image";
import Table from "./Table";
import { Suspense } from "react";
import { FaAngleUp } from "react-icons/fa6";
import Link from "next/link";

const Types = [
  {
    name: "Interior Walls Paints",
    image: interior,
  },
  {
    name: "Exterior Walls Paints",
    image: exterior,
  },

  {
    name: "Steel Products",
    image: steal,
  },
  {
    name: "Wood Products",
    image: wood,
  },
  {
    name: "Protective Products",
    image: waterInsulation,
  },
];

function page({
  searchParams: { type, p },
}: {
  searchParams: { type: string; p: string };
}) {
  const t = type ?? Types[0].name;
  return (
    <main>
      <h1 className="text-3xl font-semibold my-1 md:my-2">Our Products</h1>
      <p className="text-gray-500 font-semibold mb-4">
        Explore our range of high-quality wall paints designed to bring your
        spaces to life with vibrant colors and long-lasting finishes.
      </p>

      <div className="grid grid-cols-5 text-sm">
        {Types.map((type) => (
          <Link
            href={{
              query: { type: type.name },
            }}
            key={type.name}
            className={`mb-4 relative hover:text-gray-800 md:px-1 pb-2 duration-300 border-b border-black ${
              t === type.name ? "px-2 text-black" : "text-gray-600"
            }`}
          >
            <Image
              src={type.image}
              alt={type.name}
              className="hidden md:block w-56 h-36 object-cover rounded-md cursor-pointer hover:scale-105 duration-300"
            />
            <p className="text-center font-semibold">{type.name}</p>
            {t === type.name && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white  border-b ">
                <FaAngleUp size={20} />
              </div>
            )}
          </Link>
        ))}
      </div>
      <Suspense
        fallback={
          <div>
            <div className="w-1/2 md:w-1/3 h-32 md:h-52 object-cover rounded-lg loading--background" />
            <div className="p-1">
              <div className="loading--background h-4 w-36 rounded-md" />
              <div className="loading--background h-4 w-24 rounded-md mt-2" />
              <div className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm mt-2">
                {[1, 2, 3, 4].map((property) => (
                  <div
                    key={property}
                    className="loading--background h-4 w-16 rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <Table filters={{ t, p }} />
      </Suspense>
    </main>
  );
}

export default page;
