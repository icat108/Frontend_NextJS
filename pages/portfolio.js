import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">Incididunt in cillum magna occaecat nisi qui in.</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/original-39e21375d4d1662004aceacedff384d6.jpg" className="portfolio-image" />

                <h4 className="portfolio-name">Template BackEndDev</h4>
                {/* <div className="portfolio-category">..</div> */}
              </div>
              <div className="portfolio-item">
                <img src="/original-e6b772cbfc84cc2050d87effdfee0f43.jpg" className="portfolio-image" />

                <h4 className="portfolio-name">UI/UX Design</h4>
                {/* <div className="portfolio-category">Website Dev</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
