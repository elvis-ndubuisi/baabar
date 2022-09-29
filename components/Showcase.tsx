import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
import { gsap, Power3, CSSPlugin } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const Showcase = () => {
  let showcaseRef = useRef(null) as any;
  let subHeadingRef = useRef(null) as any;
  let headingRef = useRef(null) as any;
  let headingSiblings = gsap.utils.selector(headingRef);
  let imgRef = useRef(null) as any;
  let revealImg = useRef(null) as any;
  // const timeLine = useRef() as any;

  useEffect(() => {
    let imgTween = gsap
      .timeline()
      .to(showcaseRef, { duration: 0, css: { visibility: "visible" } })
      .to(revealImg, {
        duration: 1.4,
        delay: 0.5,
        ease: Power3.easeInOut,
        css: { height: "0%", width: "0%" },
      })
      .from(imgRef, {
        duration: 1.4,
        scale: 1.6,
        ease: Power3.easeInOut,
        immediateRender: false,
        delay: -1.4,
      });

    gsap.to(headingSiblings("h1"), {
      duration: 0,
      css: { display: "block" },
      stagger: 0.4,
    });

    gsap.to(subHeadingRef, { duration: 0, css: { display: "block" } });

    let headingTween = gsap
      .timeline()
      .from(headingSiblings("h1"), {
        duration: 1,
        y: 90,
        ease: Power3.easeInOut,
        stagger: 0.4,
        immediateRender: false,
      })
      .from(subHeadingRef, {
        duration: 1,
        x: -100,
        immediateRender: false,
        delay: -1.3,
      });
    return () => {
      headingTween.kill();
      imgTween.kill();
    };
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
          <div className="showcase-img">
            <div className="reveal-img" ref={(el) => (revealImg = el)}></div>
            <img
              src="/assets/rockstar.svg"
              alt="rockstar"
              ref={(el) => (imgRef = el)}
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Showcase;
