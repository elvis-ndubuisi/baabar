import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const mdFiles = fs.readFileSync(path.join("mdx"));

  const paths = mdFiles.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  return {};
}

export default function Article({ article }) {}
