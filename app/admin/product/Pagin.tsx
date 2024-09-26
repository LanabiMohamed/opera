"use client";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

function Pagin({ p, count }: { p: string; count: number }) {
  const { replace } = useRouter();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    replace(`?p=${value}`);
  };

  return (
    <div className="flex justify-center">
      <Pagination count={count} page={Number(p)} onChange={handleChange} />
    </div>
  );
}

export default Pagin;
