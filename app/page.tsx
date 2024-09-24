import Image from "next/image";
import cover from "@public/coverPic.jpg";
import idea from "@public/idea.jpg";
import highQuality from "@public/highQuality.jpg";
import home from "@public/home.jpg";
import painter from "@public/painter.png";
import extiror from "@public/exterior.png";
import interior from "@public/interior.png";
import Link from "next/link";

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
      href: "/",
    },
    {
      src: extiror,
      title: "Extiror Paints",
      href: "/",
    },
    {
      src: interior,
      title: "Interior Paints",
      href: "/",
    },
  ];
  return (
    <main>
      <Image
        src={cover}
        alt="cover image"
        className="object-cover md:max-h-80 min-h-60"
      />

      <section className="max-w-[60rem] mx-auto my-10 p-4">
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
                    className="object-cover w-full h-48 md:h-36 rounded-md hover:scale-105 duration-150 cursor-pointer"
                  />

                  <p className="font-semibold text-center">{title}</p>
                </Link>
              )
          )}
        </div>
      </section>

      <section className="max-w-[60rem] mx-auto my-10 p-4">
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
