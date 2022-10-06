import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
import { gsap, Power3, Quad } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { anim_showcaseImg, anim_headingTween } from "../libraries/animations";

const Showcase = () => {
  let showcaseRef = useRef<HTMLDivElement>(null);
  let subHeadingRef = useRef<HTMLHeadingElement>(null);
  let headingRef = useRef<HTMLDivElement>(null);
  let paragRef = useRef<HTMLParagraphElement>(null);
  let headingSiblings = gsap.utils.selector(headingRef);
  let imgRef = useRef<HTMLImageElement>(null);
  let revealImg = useRef<HTMLDivElement>(null);
  let linkBtns = useRef(null);
  let linkSiblings = gsap.utils.selector(linkBtns);

  useEffect(() => {
    let imgTween = anim_showcaseImg(
      showcaseRef.current,
      revealImg.current,
      imgRef.current
    );

    gsap.to(headingSiblings("h1"), {
      duration: 0.5,
      css: { display: "block" },
      stagger: 0.4,
    });

    gsap.to(subHeadingRef.current, { duration: 0, css: { display: "block" } });

    let headingTween = anim_headingTween(
      headingSiblings,
      subHeadingRef.current
    );

    gsap.to(linkSiblings("button"), {
      css: { display: "block" },
      duration: 0,
      opacity: 1,
      stagger: 0.4,
    });

    let paragTween = gsap.timeline().from(paragRef.current, {
      duration: 1,
      opacity: 0,
      ease: Quad.easeInOut,
      immediateRender: false,
    });

    return () => {
      headingTween.kill();
      imgTween.kill();
      paragTween.kill();
    };
  }, []);

  return (
    <section className="showcase" ref={showcaseRef}>
      <section className="wrapper">
        <Navbar />
        <section className="showcase-content">
          <section className="showcase-caption">
            <h4 ref={subHeadingRef}>Free, Safe, Simple</h4>
            <div className="caption-text" ref={headingRef}>
              <span>
                <h1>QR Code</h1>
              </span>
              <span>
                <h1>Shorten Url</h1>
              </span>
            </div>

            <p ref={paragRef}>
              <span>#1</span> Free and fully customizable Barcode - Qr Code
              Generator, URL shortening service and Barcode scanner.
            </p>

            <div className="link-buttons" ref={linkBtns}>
              <button>
                <Link href="/barcode">
                  <a className="btn">Generate Code</a>
                </Link>
              </button>
              <button>
                <Link href="shortener">
                  <a className="btn">Shorten Link</a>
                </Link>
              </button>
            </div>
          </section>
          <div className="showcase-img">
            <div className="reveal-img" ref={revealImg}></div>
            <img src="/assets/rockstar.svg" alt="rockstar" ref={imgRef} />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Showcase;
