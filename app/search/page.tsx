import { Suspense } from "react";
import Filter from "./Filter";
import Table from "./Table";

function page({
  searchParams,
}: {
  searchParams: {
    p: string;
    type: string;
    search: string;
    destination: string;
    min: string;
    max: string;
  };
}) {
  return (
    <main className="max-w-[70rem] mx-auto p-2">
      <h1 className="text-3xl font-semibold mt-1 md:my-2">
        Find Your Perfect Paint
      </h1>
      <p className="text-gray-500 font-semibold mb-2">
        Search through our wide selection of wall paints and find the ideal
        product for your next project. Filter by type, price, or destination to
        get exactly what you need.
      </p>

      <Suspense>
        <Filter searchParams={searchParams} />
      </Suspense>
      <div className="w-full h-[1px] bg-gray-500 my-1" />
      <Suspense
        fallback={
          <div className="pb-72">
            <div className="w-1/2 md:w-1/3 h-32 md:h-52 object-cover rounded-lg loading--background my-3 " />
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
        <Table searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

export default page;
