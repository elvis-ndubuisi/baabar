import Link from "next/link";

const Article = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug}`}>
      <a className="article">
        <h3>{article.frontmatter.title}</h3>
        <p>{article.frontmatter.excerpt}</p>

        <img
          src={article.frontmatter.cover_image}
          alt={article.frontmatter.cover_image}
        />
      </a>
    </Link>
  );
};

export default Article;
