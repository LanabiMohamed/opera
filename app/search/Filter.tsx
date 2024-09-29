"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";

function Filter({
  searchParams: { type, search, destination, min, max },
}: {
  searchParams: {
    type: string;
    search: string;
    destination: string;
    min: string;
    max: string;
  };
}) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const debouncedSearch = debounce((value: string) => {
    params.set("search", value);
    replace(`?${params.toString()}`);
  }, 500);

  const debouncedMinPrice = debounce((value: string) => {
    params.set("min", value);
    replace(`?${params.toString()}`);
  }, 1500);

  const debouncedMaxPrice = debounce((value: string) => {
    params.set("max", value);
    replace(`?${params.toString()}`);
  }, 1500);

  return (
    <div className="flex gap-2 justify-center md:py-2 flex-wrap">
      <TextField
        className="w-[48%] md:w-auto"
        label="Search"
        type="search"
        defaultValue={search}
        onChange={(e) => {
          params.delete("p");
          if (e.target.value === "") {
            params.delete("search");
            replace(`?${params.toString()}`);
            return;
          }
          debouncedSearch(e.target.value);
        }}
      />
      <Autocomplete
        className="w-[48%] md:w-52"
        multiple
        options={[
          "Habitations",
          "Bureaux",
          "Hotel",
          "Restaurants",
          "Showroom",
          "Magasins",
        ]}
        renderInput={(params) => <TextField {...params} label="Destination" />}
        renderTags={(value) => {
          return (
            <div className="flex w-10 md:w-20 overflow-hidden">
              {value.map((option, index) => (
                <div key={index}>{option}, </div>
              ))}
            </div>
          );
        }}
        defaultValue={destination?.split(",")}
        onChange={(e, value) => {
          if (value.length === 0) params.delete("destination");
          else params.set("destination", value.join(","));
          params.delete("p");
          replace(`?${params.toString()}`);
        }}
      />

      <Autocomplete
        disablePortal
        options={[
          "Interior Walls Paints",
          "Exterior Walls Paints",
          "Protective Products",
          "Steel Products",
          "Wood Products",
        ]}
        renderInput={(params) => <TextField {...params} label="Type" />}
        value={type}
        onChange={(e, value) => {
          if (!value) params.delete("type");
          else params.set("type", value);
          params.delete("p");
          replace(`?${params.toString()}`);
        }}
        className="w-[31%] md:w-36"
      />

      <FormControl className="w-[31%] md:w-24">
        <InputLabel htmlFor="min">Min Price</InputLabel>
        <OutlinedInput
          type="number"
          id="min"
          defaultValue={Number(min ?? 0)}
          onChange={(e) => {
            params.delete("p");
            if (e.target.value === "") {
              params.delete("min");
              replace(`?${params.toString()}`);
              return;
            }
            debouncedMinPrice(e.target.value);
          }}
          endAdornment={<InputAdornment position="end">Dzd</InputAdornment>}
          label="Min Amount"
        />
      </FormControl>

      <FormControl className="w-[31%] md:w-24">
        <InputLabel htmlFor="max">Max Price</InputLabel>
        <OutlinedInput
          type="number"
          id="max"
          defaultValue={Number(max ?? 0)}
          onChange={(e) => {
            params.delete("p");
            if (e.target.value === "") {
              params.delete("max");
              replace(`?${params.toString()}`);
              return;
            }
            debouncedMaxPrice(e.target.value);
          }}
          endAdornment={<InputAdornment position="end">Dzd</InputAdornment>}
          label="Max Amount"
        />
      </FormControl>
    </div>
  );
}

export default Filter;
