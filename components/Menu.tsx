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
  let menuRef: null | any = useRef(null);
  let menuLayerRef: null | any = useRef(null);
  let menuBackgroundRef: null | any = useRef(null);
  let link1Ref: null | any = useRef(null);
  let link2Ref: null | any = useRef(null);
  let link3Ref: null | any = useRef(null);
  let link4Ref: null | any = useRef(null);
  let infoRef: null | any = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      anim_menuOut(menuLayerRef, menuBackgroundRef);
      gsap.to(menuRef, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.initial === null && state.clicked === true)
    ) {
      gsap.to(menuRef, { duration: 0, css: { display: "block" } });
      anim_menuIn(menuBackgroundRef, menuLayerRef);
      anim_menuInReveal(menuBackgroundRef, menuLayerRef);
      anim_infoIn(infoRef);
      anim_linkText(link1Ref, link2Ref, link3Ref, link4Ref);
    }
    // return () => {};
  }, [state]);

  return (
    <div ref={(el) => (menuRef = el)} className="menu">
      <div
        ref={(el) => (menuBackgroundRef = el)}
        className="menu-secondary-background"
      ></div>
      <div ref={(el) => (menuLayerRef = el)} className="menu-layer">
        <div className="menu-service-background"></div>
        <div className="wrapper">
          <div className="menu-container">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link href="/shortener">
                      <a
                        ref={(el) => (link1Ref = el)}
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
                        ref={(el) => (link2Ref = el)}
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
                        ref={(el) => (link3Ref = el)}
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
                        ref={(el) => (link4Ref = el)}
                        onMouseEnter={(e) => anim_linkHover(e.target)}
                        onMouseLeave={(e) => anim_linkExit(e.target)}
                      >
                        Scanner
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (infoRef = el)} className="info">
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
