import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

const Shortener = () => {
  let linkField = useRef() as any;

  const [url, setUrl] = useState("Generated Url here..");

  const handleSubmit = () => {};

  useEffect(() => {
    linkField.current.focus();
  }, []);

  return (
    <>
      <section className="wrapper">
        <Navbar />
        <section className="shorten-landing">
          <h1>The shorter the better</h1>
          <form className="link-input" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="url"
                ref={linkField}
                placeholder="Enter link"
              />
              <button>Generate</button>
            </div>
          </form>
          <div className="url">
            <p>{url}</p>
            <i>cp</i>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Shortener;
