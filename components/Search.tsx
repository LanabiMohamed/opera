import TextField from "@mui/material/TextField";

function Search() {
  return (
    <div className="p-3">
      <div className="w-96 max-w-full mx-auto">
        <TextField label="Search field" type="search" fullWidth size="small" />
      </div>
    </div>
  );
}

export default Search;
