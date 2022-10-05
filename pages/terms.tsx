import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const terms = () => {
  return (
    <main className="wrapper">
      <Navbar />
      <section className="legal">
        <h2>Terms of Use</h2>
        <small>Effective October, 2022</small>

        <p>
          Thank you for using Baabar. These terms of service (Terms) cover your
          use and access of our website, our mobile app and related software
          (our Services). By using our Services you agree these Terms and to
          review our <Link href="privacy">Privacy Policy</Link>. If you do not
          agree to these Terms or our Privacy Policy, you should not use our
          Services.
        </p>

        <h3>Software</h3>
        <p>
          The Baabar services may include web-based or downloadable mobile
          software, which may update automatically on your device to newer
          versions. We grant you a worldwide, non-exclusive and non-transferable
          to use the software solely to use the services. Components of the
          software may be offered under an open source license, in this case we
          will make that license available to you. Provisions of the open source
          license may expressly override some of these Terms.
        </p>
        <h3>Changes to Services</h3>
        <p>
          We may change the features of our Services, withdraw or add new
          features form time to time.
        </p>
        <h3>Pricing</h3>
        <p>
          The QR Code and Link Shortening services are completely free. Price
          tags maybe added to later features
        </p>
        <h3>Limitation of Liability</h3>
        <p>
          To the fullest extend permitted by law, in no event shall Baabar be
          liable for any damages or loss of data, business, profits, computer
          hardware or software.
        </p>
        <h3>Warranties</h3>
        <p>
          We strive to provide good Services and hope you enjoy using them. But
          there are things we cannot guarantee. We provide our Services "As is".
          To the fullest extend permitted by law, we make no warranties either
          implied or expressed about the Services. We do not make any promise
          about the specific functions of the services, their reliability or
          availability.
        </p>
        <h3>Changes of Terms</h3>
        <p>
          We reserve the right these Terms at any time. We will always post the
          most current version on our website. By continuing to use the Services
          after the changes become effective, you agree to the revised Terms.
        </p>
      </section>
    </main>
  );
};

export default terms;
