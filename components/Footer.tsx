import Link from "next/link";
import { FiLinkedin, FiTwitter, FiMail, FiCoffee } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="wrapper">
        <div>
          <Link href="/">
            <div className="brand">BaaBar.</div>
          </Link>
        </div>

        <nav>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="shortener">Shorten Link</Link>
            </li>
            <li>
              <Link href="/qrcode">QR code</Link>
            </li>
            <li>
              <Link href="/qrcode">Scan QR code</Link>
            </li>
          </ul>
        </nav>

        <section className="misc">
          <h3>Other Services</h3>
          <a href="">Lorem Generator</a>
          <a href="">Lorem Generator</a>
          <a href="">Lorem Generator</a>
        </section>

        <section className="socials">
          <div>
            <a href="">
              <FiLinkedin />
            </a>
            <a href="">
              <FiTwitter />
            </a>
            <a href="">
              <FiMail />
            </a>
          </div>
          <button>
            <FiCoffee size={24} />
            <span>Send a Tip</span>
          </button>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
