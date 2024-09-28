import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";
import Link from "next/link";
import exterior from "@public/productsTypes/exterior.png";
import interior from "@public/productsTypes/interior.png";
import steal from "@public/productsTypes/steal.png";
import waterInsulation from "@public/productsTypes/waterInsulation.png";
import wood from "@public/productsTypes/wood.png";

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

function Nav({ t }: { t: string }) {
  return (
    <div className="flex flex-wrap gap-2 gap-y-1 md:gap-0 md:grid md:grid-cols-5 text-sm">
      {Types.map((type) => (
        <Link
          href={{
            query: { type: type.name },
          }}
          key={type.name}
          className={`md:mb-4 relative hover:text-gray-800 md:px-1 md:pb-2 duration-300 md:border-b border-black ${
            t === type.name ? "md:px-2 text-black" : "text-gray-600"
          }`}
        >
          <Image
            src={type.image}
            alt={type.name}
            className="hidden md:block w-56 h-36 object-cover rounded-md cursor-pointer hover:scale-105 duration-300"
          />
          <p
            className={`text-center font-semibold bg-green-300 md:bg-transparent px-2 py-1 md:py-0 rounded-xl ${
              t === type.name ? "" : "opacity-70"
            }`}
          >
            {type.name}
          </p>
          {t === type.name && (
            <div className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white  border-b ">
              <FaAngleUp size={20} />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
