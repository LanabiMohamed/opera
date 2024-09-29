"use client";
import TextField from "@mui/material/TextField";
import { useEffect, useState, useRef, useCallback } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { debounce } from "lodash";
import Link from "next/link";
import { InputAdornment } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";

interface Product {
  _id: string;
  title: string;
  type: string;
  variances: {
    quantity: string;
    price: number;
  }[];
}

function Search() {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  const [results, setResults] = useState<
    | {
        products: Product[];
        count: number;
      }
    | undefined
  >();

  const inputRef = useRef<HTMLDivElement>(null);

  const fetchResults = async (query: string) => {
    setResults(undefined);
    const res = await fetch(`/api/products/search?q=${query}`);
    if (!res.ok) return setResults(undefined);
    const data = await res.json();
    setResults(data);
  };

  const debouncedFetchResults = useCallback(
    debounce((query: string) => {
      if (!query) {
        setResults(undefined);
      } else {
        fetchResults(query);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetchResults(input);
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [input, debouncedFetchResults]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setResults(undefined);
        setInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (pathname === "/search") return;
  return (
    <div className="w-96 max-w-[90%] mx-auto py-3 relative" ref={inputRef}>
      <TextField
        label="Search field"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="search"
        fullWidth
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch />
              </InputAdornment>
            ),
          },
        }}
      />
      {!!input.length && (
        <div className="overflow-hidden absolute w-full border border-gray-300 shadow-md bg-white rounded-md mt-1 z-10">
          {!results && (
            <div className="flex justify-center items-center h-32">
              <ClipLoader size={30} />
            </div>
          )}

          {results && results.products.length === 0 && (
            <div className="flex justify-center items-center h-32">
              No results found
            </div>
          )}

          {results?.products.map((result, index) => (
            <Link
              href={`/product?id=${result._id}`}
              onClick={() => {
                setResults(undefined);
                setInput("");
              }}
              key={index}
              className="flex justify-between items-center border-b p-1 hover:bg-gray-100 cursor-pointer"
            >
              <div>
                <h3 className="font-semibold">{result.title}</h3>
                <p className="text-gray-600">{result.type}</p>
              </div>
              <p>{result.variances[0].price} Dzd</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
