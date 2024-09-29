import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { notify } from "./Sonner";

function ListManager({
  title,
  HandlingAdd,
  HandlingRemove,
  list,
  rtl,
}: {
  title: string;
  HandlingAdd: (item: string) => void;
  HandlingRemove: (item: string) => void;
  list: string[];
  rtl?: boolean;
}) {
  const [input, setInput] = useState("");
  return (
    <div className="flex-1 text-sm">
      <h3 className="text-center text-base font-semibold mb-4 mt-6">{title}</h3>
      <div className="flex items-center gap-2 my-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`border border-gray-500 focus:outline-none w-full p-2 rounded-md ${
            rtl ? "text-right" : ""
          }`}
          placeholder="..."
        />
        <IoIosAddCircleOutline
          size={20}
          className="cursor-pointer hover:text-blue-500 duration-150 hover:scale-110"
          onClick={() => {
            if (input === "") return;
            HandlingAdd(input);
            setInput("");
          }}
        />
      </div>
      <div className="pb-10">
        {list.map((item) => (
          <div
            key={item}
            className={`mb-2 show-down-little flex items-center justify-between gap-2 ${
              rtl ? "text-right" : ""
            }`}
          >
            <p className="border border-gray-500 focus:outline-none p-2 rounded-md flex-1">
              {!rtl && "•"} {item}
              {rtl && " •"}
            </p>
            <MdOutlineDelete
              className="cursor-pointer"
              size={20}
              onClick={() => {
                HandlingRemove(item);
                setInput("");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListManager;
