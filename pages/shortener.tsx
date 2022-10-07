import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import {
  AiOutlineCopy,
  AiOutlineSend,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { anim_shortenImg, anim_shortenLanding } from "../libraries/animations";
import Link from "next/link";
import { json } from "stream/consumers";
let shortenApi = "https://bit.cyclic.app";

const Shortener = () => {
  let heading = useRef<HTMLHeadingElement>(null);
  let inputGroup = useRef<HTMLDivElement>(null);
  let urlRef = useRef<HTMLHeadingElement>(null);
  let imgleft = useRef<HTMLImageElement>(null);
  let imgRight = useRef<HTMLImageElement>(null);
  let imgTop = useRef<HTMLImageElement>(null);

  const [url, setUrl] = useState("");
  const [fetching, setFetching] = useState(false);
  const [shortenedLink, setShortenedLink] = useState("");

  const handleSubmit = async () => {
    try {
      const resp = await fetch("https://bit.cyclic.app", {
        method: "POST",
        body: JSON.stringify({ url: url }),
      });
      console.log(resp);
    } catch (error) {
      console.log("error on catch", error);
    }
  };

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
          <form className="link-input" onSubmit={(e) => e.preventDefault()}>
            <div ref={inputGroup}>
              <input
                type="text"
                placeholder="Enter link"
                onChange={(event) => setUrl(event.target.value)}
              />
              <button onClick={handleSubmit}>
                <>
                  {fetching ? (
                    <AiOutlineLoading3Quarters size={24} />
                  ) : (
                    "Generate"
                  )}
                </>
              </button>
              <AiOutlineSend size={24} className="ico" onClick={handleSubmit} />
            </div>
          </form>
          <div className="url" ref={urlRef}>
            <p>{shortenedLink}</p>
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
