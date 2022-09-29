import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="wrapper">
        <Link href="/">
          <div className="brand">BaaBar.</div>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="shortener">shortener</Link>
            </li>
            <li>
              <Link href="/qrcode">qr code</Link>
            </li>
          </ul>
        </nav>

        <section className="socials">
          <a href="">Li</a>
          <a href="">gm</a>
          <a href="">tw</a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
