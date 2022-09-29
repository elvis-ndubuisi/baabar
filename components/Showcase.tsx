import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
import { gsap, Power3, CSSPlugin } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Showcase = () => {
  let showcaseRef = useRef(null) as any;
  let headingRef = useRef(null) as any;
  let subHeadingRef = useRef(null) as any;
  let imgRef = useRef(null) as any;
  let imgAfter = CSSRulePlugin.getRule(".showcase-img::after");
  let headingSiblings = gsap.utils.selector(headingRef);
  const timeLine = useRef() as any;

  useEffect(() => {
    console.log(imgAfter);
    // timeLine.current = gsap
    //   .timeline()
    //   .to(showcaseRef, { duration: 0, css: { visibility: "visible" } })
    //   .to(imgAfter, {
    //     duration: 1.3,
    //     css: { width: "0%" },
    //     ease: Power3.easeInOut,
    //   });
  }, []);

  return (
    <section className="showcase" ref={(el) => (showcaseRef = el)}>
      <section className="wrapper">
        <Navbar />
        <section className="showcase-content">
          <section className="showcase-caption">
            <h4 ref={(el) => (subHeadingRef = el)}>Free, Safe, Simple</h4>
            <div className="caption-text" ref={headingRef}>
              <span>
                <h1>QR Code</h1>
              </span>
              <span>
                <h1>Shorten Url</h1>
              </span>
            </div>

            <p>
              <span>#1</span> Free and fully customizable Barcode - Qr Code
              Generator, URL shortening service and Barcode scanner.
            </p>

            <div>
              <button className="btn">Generate</button>
              <button className="btn">Generate</button>
            </div>
          </section>
          <div className="showcase-img" ref={(el) => (imgRef = el)}>
            <img src="/assets/rockstar.svg" alt="rockstar" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Showcase;
