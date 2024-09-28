"use client";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
// import { GrLanguage } from "react-icons/gr";
import Link from "next/link";

function PhoneNav({ navs }: { navs: { title: string; href: string }[] }) {
  const [toggle, setToggle] = useState<"nav" | "lang" | undefined>();
  const selectedNav = [
    { key: "nav", icon: <IoMenuSharp size={30} /> },
    // { key: "lang", icon: <GrLanguage size={30} /> },
  ];
  return (
    <div className="block md:hidden">
      <IoMenuSharp
        size={25}
        onClick={() => {
          setToggle("nav");
        }}
      />

      {toggle && (
        <div className="fixed top-0 left-0 h-svh w-full flex z-10 text-black">
          <main className="flex-1 bg-white sideIn">
            <nav className="flex">
              {selectedNav.map((nav) => (
                <button
                  className={`flex-1 p-2 flex items-center justify-center ${
                    toggle === nav.key
                      ? "bg-white"
                      : "bg-gray-200 border border-gray-400"
                  }`}
                  key={nav.key}
                  onClick={() => {
                    setToggle(nav.key as "nav" | "lang");
                    console.log(nav.key);
                  }}
                >
                  {nav.icon}
                </button>
              ))}
            </nav>
            <div className="px-2">
              {toggle === "nav" &&
                navs.map((nav) => (
                  <div key={nav.title}>
                    <Link
                      onClick={() => setToggle(undefined)}
                      href={nav.href}
                      className="flex justify-between items-center py-3 text-gray-700"
                    >
                      <p>{nav.title}</p>
                    </Link>
                    <div className="w-full bg-gray-400 h-[1px]" />
                  </div>
                ))}
              {/* {toggle === "lang" && (
                <div>
                  <h2 className="font-semibold">Language</h2>
                </div>
              )} */}
            </div>
          </main>
          <aside
            className="backdrop-blur-sm p-3"
            onClick={() => setToggle(undefined)}
          >
            <RxCross1 size={30} color="white" />
          </aside>
        </div>
      )}
    </div>
  );
}

export default PhoneNav;
