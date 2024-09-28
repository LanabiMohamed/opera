"use client";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

function Pagin({ p, count }: { p: number; count: number }) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("p", value.toString());

    replace(`?${params.toString()}`);
  };
  return (
    <div className="flex justify-center">
      <Pagination count={count} page={p} onChange={handleChange} />
    </div>
  );
}

export default Pagin;
