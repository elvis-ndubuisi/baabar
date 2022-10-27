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

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
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
  frontmatter,
  slug,
  content,
}: {
  frontmatter: { title: string; cover_img: string; excerpt: string };
  slug: string;
  content: string;
}) {
  let { title, cover_img, excerpt } = frontmatter;

  return (
    <>
      <Head>
        <title>{title.toString()}</title>
        <meta name="description" content={excerpt.toString()} />
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