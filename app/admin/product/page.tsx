import { Suspense } from "react";
import Table from "./Table";

function page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Table />
      </Suspense>
    </div>
  );
}

export default page;
