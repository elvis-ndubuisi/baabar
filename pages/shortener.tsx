import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { gsap, Power3, Bounce, Elastic } from "gsap";
import { AiOutlineCopy } from "react-icons/ai";

const Shortener = () => {
  let linkField = useRef() as any;
  let heading = useRef(null) as any;
  let inputGroup = useRef(null) as any;
  let urlRef = useRef(null) as any;
  let imgleft = useRef(null) as any;
  let imgTop = useRef(null) as any;

  const [url, setUrl] = useState("Generated Url here..");

  const handleSubmit = () => {};

  useEffect(() => {
    linkField.current.focus();
    gsap;

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
      .to(urlRef, { duration: 0.5, opacity: 1 })
      .from(imgTop, {
        duration: 1,
        ease: Elastic.easeInOut,
        x: 500,
        immediateRender: false,
      })
      .to(imgTop, { duration: 0, css: { visibility: "visible" } });

    gsap.to(imgleft, { duration: 0, css: { visibility: "visible" } });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      <section className="wrapper">
        <Navbar />
        <section className="shorten-landing">
          <img
            ref={(el) => (imgTop = el)}
            className="bottom-right"
            src="./assets/casual-life-3d-spotted-blue-succulent-plant.png"
            alt="casual-life-3d-spotted-blue-succulent-plant"
          />
          <img
            className="top-left"
            ref={(el) => (imgleft = el)}
            src="./assets/casual-life-3d-white-robot.png"
            alt="casual-life-3d-white-robot"
          />
          <h1 ref={(el) => (heading = el)}>Shorter Links, Better Experience</h1>
          <form className="link-input" onSubmit={handleSubmit}>
            <div ref={(el) => (inputGroup = el)}>
              <input type="text" ref={linkField} placeholder="Enter link" />
              <button>Generate</button>
            </div>
          </form>
          <div className="url" ref={(el) => (urlRef = el)}>
            <p>{url}</p>
            <i>
              <AiOutlineCopy size={24} />
            </i>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Shortener;
