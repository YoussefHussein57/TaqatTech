import "./CaseStudy.css";

import hero from "../../Assets/CaseStudy/Hero/Group 3.png";
import LikeIcon from "../../Assets/CaseStudy/Hero/Like.svg";
import featuredSuccess from "../../Assets/CaseStudy/FeaturedStory/featrued.png";

import Button from "../../Components/Custom/Button/Button";
import NumbersCard from "../../Components/Custom/NumbersCard/NumbersCard";

function CaseStudy() {
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div
              className="hero__Content d-flex flex-column gap-5 order-2 order-lg-1"
              style={{ maxWidth: "640px" }}
            >
              <div>
                <h2 className="Content-title mb-2 mb-lg-5">Case Studies</h2>
                <p className="content-txt" style={{ maxWidth: "540px" }}>
                  Explore real-world success stories showcasing how TaqaTechno
                  has empowered businesses across industries to achieve digital
                  transformation with tailored Odoo solutions.
                </p>
              </div>
              <div className="content-like d-flex justify-content-center align-items-center p-2 rounded-4">
                <div className="background-like h-50 rounded-4">
                  <img src={LikeIcon} alt=" Like " className="p-3" />
                </div>
                <div className="p-4 d-flex flex-column gap-1">
                  <h3 className="perctange"> 99 % </h3>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
            <div
              className="content-image order-1 order-lg-2"
              style={{ maxWidth: "582px" }}
            >
              <img src={hero} alt="Hero" className="w-100 ms-0 ms-lg-5" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container success-story rounded-5">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 p-4">
            <div style={{ maxWidth: "500px" }}>
              <img
                src={featuredSuccess}
                alt="success story"
                className=" w-100"
              />
            </div>
            <div className=" success-content  d-flex flex-column align-items-start text-light">
              <div className="heading" style={{ height: "200px" }}>
                <h2 className="success-title">Featured Success Story</h2>
              </div>
              <div className="row d-flex flex-column gap-3">
                <h4> Global Manufacturing Inc. </h4>

                <p>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>
                    {" "}
                    40% increase{" "}
                  </span>{" "}
                  in operational efficiency after implementing Odoo
                  Manufacturing
                </p>

                <div className="btn" style={{ maxWidth: 300 }}>
                  <Button
                    path=""
                    variant="outline"
                    className="bg-light text-dark gap-3"

                  >
                    <span style={{lineHeight:"25px", fontWeight:"bold"}}>

                    Read full case study{" "}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                        >
                      <path
                        d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
                        stroke="#0F172A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="numbers  container d-flex flex-column align-items-center gap-3 gap-lg-5 ">
          <div
            className="results d-flex flex-column align-items-center  text-center gap-2 gap-lg-4 mb-5"
            style={{ maxWidth: "878px" }}
          >
            <h1 className="BusinessTxt">
              Driving <span> Impact</span> Through Measurable Results{" "}
            </h1>
            <h3 style={{ fontSize: "24px", fontWeight: "700" }}>
              Our success is measured by the tangible results we deliver.
            </h3>
            <p className="BusinessPara" style={{ maxWidth: "654px" }}>
              {" "}
              These metrics reflect the efficiency, cost savings, customer
              satisfaction, and revenue growth our clients achieve through our
              tailored Odoo solutions.
            </p>
          </div>
          <div className="d-flex gap-3 flex-column flex-xl-row">
            <NumbersCard
              end={40}
              suffix=" %"
              txt="Average Efficiency Increase"
              className={"light text-nowrap"}
            />
            <NumbersCard
              end={60}
              suffix=" %"
              txt="Cost Reduction"
              className={"light"}
            />
            <NumbersCard
              end={90}
              suffix=" %"
              txt="Customer Satisfaction"
              className={"light"}
            />
            <NumbersCard
              end={45}
              suffix=" %"
              txt="Revenue Growth"
              className={"light"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
