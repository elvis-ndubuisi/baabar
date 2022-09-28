import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">
        <span className="brand">
          baa<span className="blue">Bar</span>
        </span>
      </Link>
      <div className="line"></div>
      <div className="menu-button">
        <button>menu</button>
      </div>
      {/* <Menu /> */}
    </header>
  );
};

export default Navbar;
