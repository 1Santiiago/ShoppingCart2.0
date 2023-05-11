import CartButton from "../CartButton/CartButton";
import "../Header/header.css";
import SearchBar from "../SearchBar/SearchBar";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <SearchBar />
    <CartButton />
      </div>
    </div>
  );
}

export default Header;
