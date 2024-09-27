import Image from "next/image";
import painter from "@public/painter.png";
import time from "@public/painter/time.png";
import efficiency from "@public/painter/efficiency.png";
import insurance from "@public/painter/insurance.png";
import quality from "@public/painter/quality.png";
import right from "@public/painter/right.png";

function page() {
  const whys = [
    {
      title: "Quality",
      description:
        "All products used are Opera  Peinture high-quality products.",
      image: quality,
    },
    {
      title: "Time",
      description:
        "Saving your time to find the best painter to deliver the best results.",
      image: time,
    },
    {
      title: "Efficiency",
      description:
        "All professional painters are well trained with long experience.",
      image: efficiency,
    },
    {
      title: "Insurance",
      description:
        "We guarantee to complete the task with the highest standards!.",
      image: insurance,
    },

    {
      title: "Right Tools",
      description:
        "We are committed to using the best painting tools to ensure a perfect outcome.",
      image: right,
    },
  ];
  return (
    <main className="max-w-[70rem] mx-auto p-2">
      <h1 className="text-3xl font-bold">Get Painting Service</h1>
      <p className="text-gray-500 font-semibold my-2">
        We provide professional painters certified by Opera Peinture Institute
        to facilitate paint application on you.
      </p>
      <section className="flex flex-col md:flex-row items-center md:gap-8">
        <div className="flex-1">
          <Image
            alt="Opera Peinture painter"
            src={painter}
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold my-3">
            How do you get the service?
          </h2>
          <div className="text-gray-500 pl-2">
            <p>1. Register your information, and schedule a visit.</p>
            <p>
              2. The painter will visit you to inspect your wall, determine the
              necessary products, and the painting cost.
            </p>
            <p>
              3. We will deliver the products to you, and the painter will then
              implement the paint to ensure a perfect result for your space.
            </p>
          </div>
        </div>
      </section>

      <p className="text-2xl font-bold mt-10">
        5 Reasons to Hire a Professional Painter
      </p>
      <div className="flex flex-wrap justify-center text-center my-6 gap-4">
        {whys.map((why) => (
          <div
            key={why.title}
            className="flex flex-col items-center gap-4 my-4 w-1/2 md:w-[30%]"
          >
            <Image
              alt={why.title}
              src={why.image}
              className="w-36 rounded-full aspect-square shadow-xl"
            />

            <h3 className="font-semibold">{why.title}</h3>
            <p className="text-sm text-gray-700">{why.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default page;
