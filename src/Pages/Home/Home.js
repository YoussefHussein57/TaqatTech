import "./Home.css";
import Button from "../../Components/Custom/Button/Button";
import HeroLogo from "../../Assets/home/Frame 578.png";
import ServiceImg from "../../Assets/home/ServiceFrame.png";
import quotations from "../../Assets/home/quotations.svg";
import gear from "../../Assets/home/gear.png";
import data from "../../data";
import ServiceCard from "../../Components/Custom/ServiceCard/ServiceCard";
import NumbersCard from "../../Components/Custom/NumbersCard/NumbersCard";
import { useState } from "react";
import { motion } from "framer-motion";



const testimonials = [
  {
    text: "The implementation process was smooth and professional. Our productivity has increased by 40% since switching to Odoo.",
    name: "Michael Chen",
    title: "Operations Director at Global Manufacturing Inc.",
    img: require("../../Assets/home/testmonials.png"),
  },
  {
    text: "Seamless integration and top-notch support. Since adopting Odoo, our operations have become more efficient and our team collaboration has improved dramatically.",
    name: " Jennifer Michael",
    title: "Technical Engineer at Global Manufacturing Inc.",
    img: require("../../Assets/home/user2.avif"),
  },
  // add more testimonials here if needed
];

export default function Home() {

  const services = data.services;

  const logos = Array.from({ length: 7 }, (_, i) =>
    require(`../../Assets/home/AgenciesLogos/Logos0${i + 1}.svg`)
  );

  // Testimonial Section
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  return (
    <>
      <div className="container">
        <section className="hero d-flex flex-column align-items-center text-center gap-4 px-3 px-md-5 ">
          <div>
            <h1 className="HeroTxt1">
              Transform Your Business with <span>TaqaTechno</span>
            </h1>
          </div>

          <div>
            <p className="HeroPara">
              As an Official Odoo Partner, we help businesses streamline their
              operations, boost productivity, and drive growth with customized
              Odoo implementations.
            </p>
          </div>

          <div className="buttons d-flex justify-content-center gap-3  ">
            <Button path="/">Get Started</Button>
            <Button path="/" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="heroLogo col-12 d-flex justify-content-center">
            <img src={HeroLogo} alt="Odoo Logo" className="img-fluid" />
          </div>
        </section>
        <section className="agencies d-flex flex-column align-items-center gap-4">
          <div className="agenciesHeader d-flex flex-column align-items-center">
            <h2 className="agenciesHeaderTxt">
              Trusted by <span> 500+ </span> from different agencies to high
              growth tech company
            </h2>
          </div>
          <div className="agenciesLogos d-flex justify-content-lg-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Agency Logo"
                className="img-fluid"
              />
            ))}
          </div>
        </section>

        <section className="license container d-flex flex-column align-items-center  gap-4 p-5">
          <div className="services d-flex flex-column flex-xl-row justify-content-between align-items-center  ">
            <div className="serviceLeft d-flex flex-column align-items-start gap-4">
              <h3 className="serviceLeftName">Services</h3>
              <h4 className="serviceLeftTitle">
                Comprehensive <span> Odoo </span> Services
              </h4>
              <p className="serviceLeftDesc">
                {" "}
                From implementation to support, we provide end-to-end Odoo
                solutions to help your business thrive{" "}
              </p>

              <div className="row row-cols-1 row-cols-md-2 g-4">
                {services.map((service, index) => (
                  <div key={index} className="col">
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="ServiceImage d-flex  gap-3"
              style={{ maxWidth: "480px" }}
            >
              <img
                src={ServiceImg}
                alt="service"
                style={{ maxWidth: "451px"}}
              />
            </div>
          </div>
        </section>
        <section className="d-flex p-4 flex-column align-items-center gap-4">
          <div className="numbers container d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
              <h1 className="BusinessTxt">
                Trusted by <span> businesses </span>world wide
              </h1>
              <p className="BusinessPara">
                {" "}
                Our track record speaks for itself
              </p>
            </div>
            <div className="d-flex gap-3 flex-column flex-xl-row">
              <NumbersCard
                title="500+"
                txt="Successful Implementations"
                className={"light text-nowrap"}
              />
              <NumbersCard
                title="15+"
                txt="Years of Experience"
                className={"light"}
              />
              <NumbersCard
                title="98%"
                txt="Client Satisfaction"
                className={"light"}
              />
              <NumbersCard
                title="24/7"
                txt="Support Available"
                className={"light"}
              />
            </div>
          </div>
        </section>
        <section className="testimonial-section d-flex flex-column align-items-center text-center">
          <div className="container">
            <h1 className="BusinessTxt">
              Trusted by <span> Industry Leaders </span>
            </h1>
            <p className="BusinessPara">
              See what our clients say about their experience working with us.
            </p>

            <div className="position-relative d-flex flex-column align-items-center">
              {/* Testimonial block */}
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="blockquote mx-auto px-4 px-md-5 mb-4"
                style={{ maxWidth: "700px" }}
              >
                <div className="quote-icon text-primary mb-3 fs-2">
                  <img src={quotations} alt="qutotations" />
                </div>
                <p className="fs-5">{current.text}</p>
                <div className="d-flex flex-column align-items-center mt-4">
                  <img
                    src={current.img}
                    alt={current.name}
                    className="rounded-circle mb-2"
                    width="48"
                    height="48"
                  />
                  <strong>{current.name}</strong>
                  <small className="text-secondary">{current.title}</small>
                </div>
              </motion.blockquote>
              {/* Arrows wrapper - stays left/right on desktop, center below on mobile */}
              <div className="arrows-wrapper">
                <button className="arrow-btn left" onClick={prev}>
                  &lt;
                </button>
                <button className="arrow-btn right" onClick={next}>
                  &gt;
                </button>
              </div>

              {/* User Info */}
            </div>
          </div>
        </section>
        <section className="d-flex flex-column align-items-center gap-4 p-5">
          <div className="starter container d-flex flex-column flex-lg-row align-items-start">
            <div className="starter__left d-flex flex-column align-items-start order-2 order-lg-1">
              <h2 className="Starter__txt">
                Unlock Your Business Potential with <span> TaqaTechno </span>
              </h2>
              <p className="Starter__para">
                Ready to transform your business with seamless Odoo solutions?
                Let’s innovate together and drive your success forward.
              </p>
              <Button path="/">Get Started</Button>
            </div>
            <div className="starter__right d-flex justify-content-center order-1 order-lg-2">
              <img src={gear} alt="gear" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
