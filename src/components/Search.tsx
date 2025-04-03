("use client");

import { useDispatch } from "react-redux";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { setSearchQuery } from "@/redux/slice/productSlice";
const Search = () => {
  const dispatch = useDispatch();
  const placeholders = [
    "What's the product name?",
    "Search the phone name",
    "Search for the home appliances",
    "Search for the latest technology"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Search;
