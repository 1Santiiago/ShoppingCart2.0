import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault(e);
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    console.log("item clicked");
  };

  return (
    <form className="search-bar">
      <input
        type="search"
        placeholder="Buscar Produtos"
        className="search_input"
        onChange={handleChange}
        required
        value={searchValue}
      />

      <button type="submit" className="search_button" onClick={handleClick}>
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchBar;
