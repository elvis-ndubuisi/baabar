import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import Showcase from "../components/Showcase";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Article from "../components/Article";

export async function getStaticProps() {
  const mdxFiles = fs.readdirSync(path.join("mdx"));

  const articles = mdxFiles.map((filename) => {
    // TODO: filter wanted articles for home page.
    const slug = filename.replace(".md", "");
    const mdxMeta = fs.readFileSync(path.join("mdx", filename), "utf-8");
    const { data: frontmatter } = matter(mdxMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
}

const Home: NextPage = ({
  articles,
}: [
  {
    slug: string;
    frontmatter: { title: string; cover_img: string; tag: string };
  }
]) => {
  const trigger = useRef(null);
  let comp = useRef(null);
  let siblings = gsap.utils.selector(comp);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        // pin: true, // pin the trigger element while active
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    tl.to(siblings(".content"), {
      opacity: 1,
      duration: 1,
      y: 0,
      // ease: Power3.easeInOut,
      stagger: {
        ease: Power3.easeInOut,
        amount: 1,
        from: "start",
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Showcase />

        <section className="wrapper articles">
          {articles &&
            articles.map((article, idx) => (
              <Article key={idx} article={article} />
            ))}
        </section>

        <section className="about" ref={trigger}>
          <h2>Free tools for easy branding and more</h2>
          <section className="wrapper" ref={comp}>
            <div className="content">
              <div className="image">
                <img src="./assets/www-pana.svg" alt="link shortner" />
              </div>
              <aside>
                <h4>Simple and fast URL shortener!</h4>
                <p>
                  Baabar transforms long, ugly looking links from top sites on
                  the internet into nice, memorable, short URLs. just paste the
                  long URL and with the click of a button, your short URL is
                  generated.
                </p>
                <p>
                  Your shortened URLs can be used in publications, documents,
                  advertisements, blogs, forums, instant messages, and other
                  locations.
                </p>

                <Link href="shortener">
                  <a className="btn">Shorten Link</a>
                </Link>
              </aside>
            </div>

            <div className="content">
              <aside>
                <h4>Fully customizable QR code</h4>
                <p>
                  Add editable and trackable QR Codes on anything you want with
                  full branding and customization feature
                </p>
                <p>
                  A QR code is a two dimensional barcode that stores information
                  in black and white dots (called data pixels or “QR code
                  modules”). Besides the black and white version, you can also
                  create a colored QR code. To make your QR code even better,
                  you can also get a QR code with logo.
                </p>
                <div>
                  <Link href="barcode">
                    <a className="btn">Generate</a>
                  </Link>
                  <Link href="scan">
                    <a className="btn">Scan File</a>
                  </Link>
                </div>
              </aside>
              <div className="image">
                <img src="./assets/QR Code-pana.svg" alt="qr code" />
              </div>
            </div>
          </section>
        </section>

        {/* <section className="mobile-ad"></section> */}
      </main>
    </>
  );
};

export default Home;
