"use client";
import { notify } from "@components/Sonner";
import { useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";

function Delete({ id, token }: { id: string; token: string }) {
  const [loading, setLoading] = useState(false);

  const HandleDelele = async () => {
    setLoading(true);
    const res = await fetch("/api/manage/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      notify({
        type: "success",
        message: "Product deleted successfully",
      });
      location.reload();
    } else {
      notify({
        type: "error",
        message: "Failed to delete product",
      });
    }
    setLoading(false);
  };

  return loading ? (
    <ClipLoader color="black" size={25} />
  ) : (
    <IoTrashBinSharp
      onClick={HandleDelele}
      size={25}
      className="cursor-pointer hover:scale-110 duration-150"
    />
  );
}

export default Delete;
