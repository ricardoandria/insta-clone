import { useState } from "react";
import "./searchBar.scss";
import { IoSearch } from "react-icons/io5";

const Search = ({ options = ["orange", "Apples", "Pearls"] }) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setshowSuggestions] = useState(false);
  const suggestions = options;

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchContainer">
      <IoSearch />
      <input
        value={value}
        onChange={handleChange}
        placeholder="Recherche..."
        onFocus={() => setshowSuggestions(true)}
      />
    </div>
  );
};

export default Search;
