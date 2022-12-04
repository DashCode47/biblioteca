import { Link } from "react-router-dom";
import "./navBar.css";
const NavBar = () => {
  const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };
  return (
    <div style={navStyles} className="navBarContainer">
      <Link to={"/"} className={"links"}>
        Home
      </Link>
      <Link to={"/create"} className={"links"}>
        Create
      </Link>
    </div>
  );
};

export default NavBar;
