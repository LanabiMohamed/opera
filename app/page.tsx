import Image from "next/image";
import cover from "@public/coverPic.jpg";
import idea from "@public/idea.jpg";
import highQuality from "@public/highQuality.jpg";
import home from "@public/home.jpg";
import painter from "@public/painter.png";
import extiror from "@public/exterior.png";
import conseils from "@public/conseils.jpg";
import Link from "next/link";
import { Suspense } from "react";
import Table from "./Table";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

export default function Home() {
  const special = [
    {
      src: highQuality,
      title: "High Quality & World-Class Standards",
    },
    {
      src: idea,
      title: "Construction & Creative Solutions",
    },
    {
      src: home,
      title: "Comfortable & Integrated Home Services",
    },
  ];

  const offers = [
    {
      src: painter,
      title: "Professional Painters",
      href: "/painter",
    },
    {
      src: extiror,
      title: "Paints",
      href: "/products",
    },
    {
      src: conseils,
      title: "Conseils",
      href: "/tips",
    },
  ];
  return (
    <main>
      <Image
        src={cover}
        alt="cover image"
        className="object-cover md:max-h-[29rem] min-h-56 w-full"
      />
      <section className="max-w-[70rem] mx-auto my-10 p-2">
        <Suspense
          fallback={
            <div>
              <div className="flex justify-between pb-4">
                <h2 className="text-xl font-bold">
                  Latest products of this week
                </h2>
                <div className="flex justify-end text-gray-500 mt-2">
                  <RiArrowLeftWideFill size={30} />
                  <RiArrowRightWideFill size={30} />
                </div>
              </div>
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
          <Table />
        </Suspense>
      </section>

      <section className="max-w-[70rem] mx-auto my-10 p-2">
        <h2 className="text-xl font-bold pb-2">Are you looking for...</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {offers.map(
            ({ src, title, href }) =>
              src && (
                <Link
                  href={href}
                  key={title}
                  className="flex-1 flex flex-col items-center gap-3 my-2 "
                >
                  <Image
                    src={src}
                    alt={title}
                    className="object-cover w-full h-48 rounded-md hover:scale-105 duration-150 cursor-pointer"
                  />

                  <p className="font-semibold text-center">{title}</p>
                </Link>
              )
          )}
        </div>
      </section>

      <section className="max-w-[70rem] mx-auto my-10 p-2">
        <h2 className="text-xl font-bold pb-2">What makes us special?</h2>
        <div className="flex flex-col md:flex-row justify-between ">
          {special.map(
            ({ src, title }) =>
              src && (
                <div
                  key={title}
                  className="flex flex-col items-center gap-3 my-2"
                >
                  <Image
                    src={src}
                    alt={title}
                    className="object-cover h-36 w-36 rounded-full"
                  />
                  <p className="font-semibold text-center">{title}</p>
                </div>
              )
          )}
        </div>
      </section>
    </main>
  );
}
