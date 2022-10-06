import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  anim_menuIn,
  anim_menuOut,
  anim_menuInReveal,
  anim_infoIn,
  anim_linkText,
  anim_linkHover,
  anim_linkExit,
} from "../libraries/animations";

const Menu = ({ state }: any) => {
  let menuRef = useRef<HTMLDivElement>(null);
  let menuLayerRef = useRef<HTMLDivElement>(null);
  let menuBackgroundRef = useRef<HTMLDivElement>(null);
  let link1Ref = useRef<HTMLAnchorElement>(null);
  let link2Ref = useRef<HTMLAnchorElement>(null);
  let link3Ref = useRef<HTMLAnchorElement>(null);
  let link4Ref = useRef<HTMLAnchorElement>(null);
  let infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.clicked === false) {
      anim_menuOut(menuLayerRef.current, menuBackgroundRef.current);
      gsap.to(menuRef.current, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.initial === null && state.clicked === true)
    ) {
      gsap.to(menuRef.current, { duration: 0, css: { display: "block" } });
      anim_menuIn(menuBackgroundRef.current, menuLayerRef.current);
      anim_menuInReveal(menuBackgroundRef.current, menuLayerRef.current);
      anim_infoIn(infoRef.current);
      anim_linkText(
        link1Ref.current,
        link2Ref.current,
        link3Ref.current,
        link4Ref.current
      );
    }
    // return () => {};
  }, [state]);

  return (
    <div ref={menuRef} className="menu">
      <div ref={menuBackgroundRef} className="menu-secondary-background"></div>
      <div ref={menuLayerRef} className="menu-layer">
        <div className="menu-service-background"></div>
        <div className="wrapper">
          <div className="menu-container">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link href="/shortener">
                      <a
                        ref={link1Ref}
                        onMouseEnter={(e) => anim_linkHover(e.target)}
                        onMouseLeave={(e) => anim_linkExit(e.target)}
                      >
                        Shortener
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/barcode">
                      <a
                        ref={link2Ref}
                        onMouseEnter={(e) => anim_linkHover(e.target)}
                        onMouseLeave={(e) => anim_linkExit(e.target)}
                      >
                        BarCode
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a
                        ref={link3Ref}
                        onMouseEnter={(e) => anim_linkHover(e.target)}
                        onMouseLeave={(e) => anim_linkExit(e.target)}
                      >
                        Qr code
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/scanner">
                      <a
                        ref={link4Ref}
                        onMouseEnter={(e) => anim_linkHover(e.target)}
                        onMouseLeave={(e) => anim_linkExit(e.target)}
                      >
                        Scanner
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={infoRef} className="info">
                <h3>info text</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, molestiae.
                </p>
              </div>
              <div className="other-projects">
                Other Products: <span>Lorem Generator</span>
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
