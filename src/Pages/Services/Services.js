import "./Services.css";
import Button from "../../Components/Custom/Button/Button";
import HeroImage from "../../Assets/Services/HeroServices/Hero.png";
import CheckImage from "../../Assets/AboutUS/check-badge.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


export default function Services() {
  const cores = data.cores;
  const CoreServices = data.CoreServices;
  const plans = data.plans;
  return (
    <>
      <section className="ourServices">
        <div className="container services__container">
          <div className="d-flex flex-column align-items-center gap-2 gap-lg-4  text-center services__container-txt ">
            <div
              className="d-flex flex-column gap-2 gap-lg-4"
              style={{ maxWidth: "882px" }}
            >
              <h2 style={{ fontSize: "60px", fontWeight: "700" }}>
                Our Services
              </h2>
              <h4>
                {" "}
                Empowering businesses with comprehensive Odoo solutions tailored
                to optimize operations, enhance efficiency, and drive growth.
              </h4>
              <p>
                we provide end-to-end support to ensure your business operates
                efficiently and maximizes the full potential of Odoo.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center mb-4">
              <Button path="/">Get Started</Button>
            </div>
          </div>
          <div className="d-flex flex-column mt-5 services__container-img ">
            <img
              src={HeroImage}
              alt="Hero"
              style={{ maxHeight: "750px" }}
              className="w-100"
            />
          </div>
        </div>
      </section>
      <section className="coreServices">
        <div className="container">
          <div className="d-flex flex-column align-items-start gap-2 gap-lg-5 coreServices__container">
            <div className="d-flex flex-column align-items-start  gap-3 mb-5">
              <h2>Core Services</h2>
              <p style={{ maxWidth: "570px" }}>
                Our core services are designed to help businesses seamlessly
                implement, customize, and optimize Odoo solutions. From initial
                deployment to custom development and training.
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-start gap-2 mt-3 ">
              {cores.map((core, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-start gap-4"
                >
                  <img src={core.img} alt={core.title} className="mb-3" />
                  <div>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>
                      {core.title}
                    </h4>
                    <p style={{ fontSize: "16px" }} className="w-100">
                      {core.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container order__container">
          <div className="row ">
            <div className="col-12 text-center mb-2 mb-lg-5">
              <h2 className="mb-2 mb-lg-5">Core Services</h2>
            </div>
            <div className="orders__numbers d-flex flex-column flex-lg-row gap-4 mt-2 mt-lg-4 ">
              {CoreServices.map((coreService, index) => (
                <div
                  key={index}
                  className="order__number col-12 col-lg-3 rounded-5 p-3 text-light d-flex flex-column gap-2 gap-lg-5"
                >
                  <h3> {coreService.order} </h3>
                  <div>
                    <h5 className="mb-2 mb-lg-3 "> {coreService.title} </h5>
                    <p>{coreService.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-start gap-5 industries__container ">
            {/* Left Text Column */}
            <div className=" col-lg-6">
              <h2 className="fw-bold text-dark">Industries We Serve</h2>
              <p >
                We deliver tailored Odoo solutions across various industries,
                ensuring efficiency and scalability.
              </p>
            </div>

            {/* Right Tags Column */}
            <div className="col-lg-5">
              <div className="d-flex flex-wrap gap-4" >
                {[
                  "Manufacturing",
                  "Retail",
                  "E-commerce",
                  "Healthcare",
                  "Professional Services",
                  "Distribution",
                ].map((industry, index) => (
                  <span key={index} className="industry-pill px-3 py-3">
                    <strong >{industry}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="support-plans py-5">
      <div className="d-flex flex-column align-items-center text-center mb-5">
        <h2 className="support-title">Support Plans</h2>
        <p className="support-txt" style={{maxWidth:"766px"}}>
          Choose a support plan that aligns with your business needs,
          ensuring continuous system optimization and expert assistance.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.key} className="col-12 col-md-4">
              <div className={`card plan-card h-100  rounded-4 ${plan.active ? "active" : ""} ${plan.className} p-2`}>
                <div className="card-body d-flex flex-column ">
                  {/* Plan Badge */}
                  <div className="border-bottom d-flex flex-column gap-4 mb-3">

                  <span className={`badge p-2 mb-3`}>
                    {plan.name}
                  </span>

                  {/* Price */}
                  <h3 className={`plan-price mb-3`}>
                    {plan.price}
                  </h3>
                  </div>


                  {/* Features */}
                  <ul className="list-unstyled d-flex flex-column flex-grow-1 mb-4 gap-4 ">
                    {plan.features.map((f, i) => (
                      <li key={i} className="d-flex align-items-center ">
                        <img src={CheckImage} alt="Check Badge" />

                        <span className="mx-3" style={{fontSize:"18px"}}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    path={""}
                    variant={plan.variantBtn}
                    className={`mt-3 d-flex justify-content-between`}
                  >
                    {plan.btnText}{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
