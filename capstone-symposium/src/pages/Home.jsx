import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollBanner } from "../components/ScrollBanner";
import { siteConfig } from "../config/site";
import HeroImageOne from "/images/hero/cube-closeup.jpg";
import HeroImageTwo from "/images/hero/cube.jpg";

export const Home = () => {
  let intro = `The Information & Computer Systems Technology (ICS) winter graduating class is \
  excited to welcome you to the December 2024, ICS Capstone Symposium!`;

  return (
    <>
      <Navbar />
      <section className="home-section">
        <div className="home-container">
          <div className="content-alignment">
            <div className="hero-container mt-12 md:mt-10">
              <img
                className="hero-one md:right-6"
                src={HeroImageOne}
                alt="hero"
              />
            </div>

            <div className="header-container">
              <div className="ics-box-heading mb-5">Camosun College</div>
              <h1>
                <span className="h1-header-special">Join Our Capstone</span>
              </h1>
              <h3 className="capstone-subheading mt-1">
                Dec. 12 | 4:00pm - 7:00pm
              </h3>
              <h3 className="capstone-subheading mt-1">777 Fort Street</h3>
              <p className="intro-text">{intro}</p>
              <div className="button-container">
                {siteConfig.homeButtons.map((button) => (
                  <div className="button-styling" role="group">
                    <Button
                      key={button.href}
                      as={Link}
                      className="text-lg lg:text-xl"
                      variant="flat"
                      href={button.href}
                    >
                      {button.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-container mt-6 md:mt-10">
              <img
                className="hero-two md:left-6"
                src={HeroImageTwo}
                alt="hero"
              />
            </div>
          </div>
        </div>
        <div className="scroll-container">
          {Array(3).fill(<ScrollBanner />)}
        </div>
      </section>
      <Footer />
    </>
  );
};
