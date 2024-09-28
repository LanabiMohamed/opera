import Table from "./Table";
import { Suspense } from "react";

import Nav from "./Nav";

function page({
  searchParams: { type, p },
}: {
  searchParams: { type: string; p: string };
}) {
  const t = type ?? "Interior Walls Paints";
  const page = Number(p ?? 1);
  return (
    <main>
      <h1 className="text-3xl font-semibold my-1 md:my-2">Our Products</h1>
      <p className="text-gray-500 font-semibold mb-4">
        Explore our range of high-quality wall paints designed to bring your
        spaces to life with vibrant colors and long-lasting finishes.
      </p>

      <Nav t={t} />

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
        <Table filters={{ t, p: page }} />
      </Suspense>
    </main>
  );
}

export default page;
