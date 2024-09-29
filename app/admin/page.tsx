import { Suspense } from "react";
import Table from "./Table";
import { MdEdit } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";

function page({ searchParams: { p } }: { searchParams: { p: string } }) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-between my-2 border-b border-gray-400">
            <div className="flex gap-2 flex-1">
              <div className="object-contain rounded-md w-36 md:w-52 h-32 loading--background" />
              <div className="whitespace-nowrap overflow-hidden">
                <div className="loading--background h-4 w-32 rounded-md mt-2"></div>
                <div className="loading--background h-4 w-20 rounded-md mt-2"></div>
                <div className="flex mt-2 gap-2">
                  <div className="loading--background h-4 w-6 rounded-md"></div>
                  <div className="loading--background h-4 w-6 rounded-md"></div>
                  <div className="loading--background h-4 w-14 rounded-md"></div>
                </div>
              </div>
            </div>
            <div>
              <MdEdit
                size={25}
                className="cursor-pointer hover:scale-110 duration-150 text-gray-500"
              />
              <IoTrashBinSharp
                size={25}
                className="cursor-pointer hover:scale-110 duration-150 text-gray-500"
              />
            </div>
          </div>
        }
      >
        <Table p={p ?? "1"} />
      </Suspense>
    </div>
  );
}

export default page;
