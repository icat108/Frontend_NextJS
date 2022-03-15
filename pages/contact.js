import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.</p>
            <ul className="contact-links">
              <li className="contact-item">Email Bussines: ichacnakval@gmail.com</li>
              <li className="contact-item">Phone: +6281292931896</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
