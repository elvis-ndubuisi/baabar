import Link from "next/link";
import { FiLinkedin, FiTwitter, FiMail, FiCoffee } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="wrapper">
        <section>
          <Link href="/">
            <div className="brand">
              Baa<span>Bar.</span>
            </div>
          </Link>

          <div className="socials">
            <a href="">
              <FiLinkedin />
            </a>
            <a href="">
              <FiTwitter />
            </a>
            <a href="">
              <FiMail />
            </a>
            <button>
              <FiCoffee size={24} />
              <span>Send a Tip</span>
            </button>
          </div>
        </section>

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

        {/* <section className="misc">
          <h3>Other Services</h3>
          <a href="">Lorem Generator</a>
        </section> */}

        <section>
          <h3></h3>
          <ul>
            <li>
              <Link href="privacy">Privary Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of use</Link>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
