import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import Navbar from "../../components/Navbar";
import Head from "next/head";

export async function getStaticPaths() {
  const mdFiles = fs.readdirSync(path.join("mdx"));

  const paths = mdFiles.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdowWithMeta = fs.readFileSync(
    path.join("mdx", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdowWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default function Article({
  frontmatter: { title, cover_img, tag, excerpt },
  slug,
  content,
}) {
  console.log(cover_img);
  return (
    <>
      <Head>
        <title>{title.toLowerCase()} - Baabar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="wrapper">
        <Navbar />
        <main className="pg-article">
          <img src={cover_img} alt={cover_img} className="article-img" />
          <h2 className="article-title">{title}</h2>
          <article
            className="article-body"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></article>
        </main>
      </section>
    </>
  );
}
