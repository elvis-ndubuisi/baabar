import React from "react";
import Navbar from "../components/Navbar";

const privacy = () => {
  return (
    <main className="wrapper">
      <Navbar />
      <section className="legal">
        <h2>Privacy Policy</h2>
        <small>Effective October, 2022</small>

        <p>
          Baabar ("we", or "us") values your trust and a key part of earning
          your trust is being upfront and clear in how we gather and use your
          information. We created this Policy to inform you on what data we
          collect, how we collect your data, how we share your data, and your
          rights around the data. This Policy applies when you use our services
          available through Baabar ("Site"). For the purposes of this Policy,
          the Site, features, content, applications, and other services provided
          by Baabar will be referred to as the "Services". This Policy works in
          conjunction with the Site’s Terms of Use. Any capitalized terms used,
          but not defined, in this Policy have the meanings provided in the
          Terms of Use. If you do not agree with our policies and practices,
          please do not use our Services. By accessing or using our Services,
          you agree to this Policy.
        </p>

        <h3>WHAT INFORMATION WE COLLECT AND HOW WE COLLECT IT</h3>
        <p>
          We collect anonymous statistics about your visit, like which pages you
          viewed. Some 3rd parties like ad networks may know you visited this
          website. We never share your data with 3rd parties except to help us
          deliver our services. These are the key points, if you need detail,
          keep reading.
        </p>
        <p>
          <span> Google Analytics</span> : We measure visitors to our website
          using Google Analytics. This records what pages you view within our
          site, how you arrived at our site and some basic information about
          your computer. All of that information is anonymous. So we don’t know
          who you are, just that somebody visited our site. The information we
          collect from analytics helps us understand what parts of our sites are
          doing well, how people arrive at our site and so on. Like most
          websites, we use this information to make our website better. Please
          see here{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            how Google uses data.
          </a>
        </p>
        <p>
          <span>Advertisement on our sites</span> : We never share any data with
          Advertisers. Third party vendors, including Google, use cookies to
          serve ads based on prior visits to our sites. Google uses a
          DoubleClick cookie that enables it and its partners to serve ads based
          on your visit to our sites and/or other sites on the Internet. You can
          opt out of the use of the DoubleClick cookie for interest-based
          advertising by visiting{" "}
          <a href="https://adssettings.google.com/anonymous?hl=en">
            Ads Settings
          </a>{" "}
          . Please see here{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            how Google uses data
          </a>{" "}
          . The cookies of other third-party vendors or ad networks may also be
          used to serve ads on our sites. Baabar is able to manage and maintain
          the platform through Ads displayed and clicked on via our website.
        </p>

        <p>
          <span>Create a Baabar short Link</span> : By using our Services, Users
          can create shortened URLs of websites. Users can create Shortened
          Links totally for free. When you create a Short Link using Baabar,
          Baabar collects and stores the original URL and the shortened URL and
          stores it in a database.
        </p>

        <p>
          <span>Scanning QR Codes</span> : We do not collect, transmit or store
          any data from QR Codes you scan using our Services. Scanning happens
          completely locally in your browser.
        </p>

        <p>
          <span>Generating QR Codes</span> : QR codes you create with our Baabar
          directly encode all content directly in the image itself. We do not
          collect, transmit or store any information you enter. The Code is
          generated directly in the browser without transmiting any information
          to a remote system (that's why it also works offline by the way).
        </p>

        <h4>Children’s Privacy</h4>
        <p>
          Our Services are not intended for and may not be used by children
          under the age of 13. We do not knowingly collect information from
          children under the age of 13 and we do not target our Services to
          children under the age of 13.
        </p>
      </section>
    </main>
  );
};

export default privacy;
