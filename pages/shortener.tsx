import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCopy, AiOutlineSend } from "react-icons/ai";
import { anim_shortenImg, anim_shortenLanding } from "../libraries/animations";
import Link from "next/link";

const Shortener = () => {
  let heading = useRef<HTMLHeadingElement>(null);
  let inputGroup = useRef<HTMLDivElement>(null);
  let urlRef = useRef<HTMLHeadingElement>(null);
  let imgleft = useRef<HTMLImageElement>(null);
  let imgRight = useRef<HTMLImageElement>(null);
  let imgTop = useRef<HTMLImageElement>(null);

  const [url, setUrl] = useState("Generated Url here..");

  const handleSubmit = () => {};

  useEffect(() => {
    let tween = anim_shortenLanding(
      heading.current,
      inputGroup.current,
      urlRef.current
    );

    let imgTween = anim_shortenImg(
      imgRight.current,
      imgleft.current,
      imgTop.current
    );

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
            ref={imgRight}
            className="bottom-right"
            src="./assets/casual-life-3d-spotted-blue-succulent-plant.png"
            alt="casual-life-3d-spotted-blue-succulent-plant"
          />
          <img
            className="bottom-left"
            ref={imgleft}
            src="./assets/casual-life-3d-spotted-blue-succulent-in-white-pot.png"
            alt="casual-life-3d-spotted-blue-succulent-in-white-pot"
          />
          <img
            ref={imgTop}
            className="top"
            src="./assets/3d-casual-life-lines-heart-1.png"
            alt="3d-casual-life-lines-heart-1"
          />

          <h1 ref={heading}>Shorten, Share, So Easy</h1>
          <h2>Easier way to share links.</h2>
          <form className="link-input" onSubmit={handleSubmit}>
            <div ref={inputGroup}>
              <input type="text" placeholder="Enter link" />
              <button>Generate</button>
              <AiOutlineSend size={24} className="ico" />
            </div>
          </form>
          <div className="url" ref={urlRef}>
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
