import Link from "next/link";
import Menu from "./Menu";
import { useState } from "react";

let disableTimer = 1000;

const Navbar = () => {
  const [menu, setMenu] = useState({
    initial: false,
    clicked: null,
    menuText: "menu",
  } as {
    initial: boolean | null;
    clicked: null | boolean;
    menuText: string;
  });

  const [disableMenu, setDisableMenu] = useState(false);

  const handleDisable = () => {
    setDisableMenu(!disableMenu);
    setTimeout(() => {
      setDisableMenu(false);
    }, disableTimer);
  };

  const handleMenu = () => {
    handleDisable();
    if (menu.initial === false) {
      setMenu({ initial: null, clicked: true, menuText: "close" });
    } else if (menu.clicked === true) {
      setMenu({ ...menu, clicked: !menu.clicked, menuText: "menu" });
    } else if (menu.clicked === false) {
      setMenu({ ...menu, clicked: !menu.clicked, menuText: "close" });
    }
  };

  return (
    <header className="header">
      <Link href="/">
        <a className="brand">
          baa<span className="blue">Bar.</span>
        </a>
      </Link>
      <div className="menu-button">
        <button disabled={disableMenu} onClick={handleMenu}>
          {menu.menuText}
        </button>
      </div>
      <Menu state={menu} />
    </header>
  );
};

export default Navbar;
