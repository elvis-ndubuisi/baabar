import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-secondary-background"></div>
      <div className="menu-layer">
        <div className="menu-servuce-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/">anoher home</Link>
                  </li>
                  <li>
                    <Link href="/">another home</Link>
                  </li>
                  <li>
                    <Link href="/">home again</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>info text</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, molestiae.
                </p>
              </div>
              <div className="locations">
                Locations: <span>Daller</span>
                <span>Daller</span>
                <span>Daller</span>
                <span>Daller</span>
                <span>Daller</span>
                <span>Daller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
