import Navbar from "../components/Navbar";
import type { NextPage } from "next";

const Qcode: NextPage = () => {
  return (
    <>
      <section className="code-landing">
        <section className="wrapper qcode">
          <Navbar />
          <h1>Generate a QR code in seconds.</h1>
        </section>
      </section>
      <main className="gen-container">
        {/* ads display */}
        <section className="generator"></section>
        {/* ads display */}
        {/* ads botom */}
      </main>
    </>
  );
};

export default Qcode;
