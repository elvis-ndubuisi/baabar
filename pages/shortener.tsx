import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { gsap, Power3, Elastic } from "gsap";
import { AiOutlineCopy, AiOutlineSend } from "react-icons/ai";
import Link from "next/link";

const Shortener = () => {
  let heading = useRef(null) as any;
  let inputGroup = useRef(null) as any;
  let urlRef = useRef(null) as any;
  let imgleft = useRef(null) as any;
  let imgRight = useRef(null) as any;
  let imgTop = useRef(null) as any;

  const [url, setUrl] = useState("Generated Url here..");

  const handleSubmit = () => {};

  useEffect(() => {
    let tween = gsap
      .timeline()
      .from(heading, {
        duration: 1,
        scale: 5,
        ease: Power3.easeInOut,
        immediateRender: false,
      })
      .from(inputGroup, {
        duration: 0.7,
        delay: -0.7,
        opacity: 0,
        y: 100,
        immediateRender: false,
      })
      .to(urlRef, { duration: 0.5, opacity: 1 });

    // gsap.to(imgleft, { duration: 0, css: { display: "block" } });
    // gsap.to(imgRight, { duration: 0, css: { display: "block" } });
    let imgTween = gsap
      .timeline()
      .from(imgRight, {
        duration: 1,
        ease: Elastic.easeInOut,
        x: 500,
        immediateRender: false,
      })
      .from(imgleft, {
        duration: 1,
        ease: Elastic.easeInOut,
        y: 200,
        delay: -1,
        immediateRender: false,
      })
      .from(imgTop, {
        duration: 0.8,
        immediateRender: false,
        ease: Power3.easeInOut,
        scale: 0,
        delay: -1,
      });

    return () => {
      tween.kill();
      imgTween.kill();
    };
  }, []);

  return (
    <>
      <section className="wrapper">
        <Navbar />
        <section className="shorten-landing">
          <img
            ref={(el) => (imgRight = el)}
            className="bottom-right"
            src="./assets/casual-life-3d-spotted-blue-succulent-plant.png"
            alt="casual-life-3d-spotted-blue-succulent-plant"
          />
          <img
            className="bottom-left"
            ref={(el) => (imgleft = el)}
            src="./assets/casual-life-3d-spotted-blue-succulent-in-white-pot.png"
            alt="casual-life-3d-spotted-blue-succulent-in-white-pot"
          />
          <img
            ref={(el) => (imgTop = el)}
            className="top"
            src="./assets/3d-casual-life-lines-heart-1.png"
            alt="3d-casual-life-lines-heart-1"
          />

          <h1 ref={(el) => (heading = el)}>Shorten, Share, So Easy</h1>
          <h2>Easier way to share links.</h2>
          <form className="link-input" onSubmit={handleSubmit}>
            <div ref={(el) => (inputGroup = el)}>
              <input type="text" placeholder="Enter link" />
              <button>Generate</button>
              <AiOutlineSend size={24} className="ico" />
            </div>
          </form>
          <div className="url" ref={(el) => (urlRef = el)}>
            <p>{url}</p>
            <i>
              <AiOutlineCopy size={24} />
            </i>
          </div>
          <div className="misc">
            <Link href="qrcode">Generate QR Code ?</Link>
          </div>
        </section>

        <section className=" shorten-caption wrapper">
          <h2>Shorten URLs or Brand Links</h2>
          <p>
            Free custom URL Shortener with many features that gives you better
            quality for links shortening. Shortened URLs will never expire. We
            do not display ads during direct redirecting to the original url.
          </p>
        </section>
      </section>
    </>
  );
};

export default Shortener;
