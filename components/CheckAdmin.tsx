"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { notify } from "./Sonner";

const CheckAdmin = ({
  children,
  AdminPw,
}: {
  children: React.ReactNode;
  AdminPw: string;
}) => {
  const [input, setInput] = useState("");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  const handleLogin = () => {
    if (input === AdminPw) {
      localStorage.setItem("token", AdminPw);
      setIsAdmin(true);
    } else {
      return notify({
        type: "error",
        message: "Invalid password",
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === AdminPw) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  if (isAdmin === null)
    return (
      <div>
        <Loader title="Checking Admin token..." />
      </div>
    );

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-[35rem]">
        <h1 className="mb-4">Enter Admin Password</h1>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mb-4"
          placeholder="Enter password"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default CheckAdmin;
