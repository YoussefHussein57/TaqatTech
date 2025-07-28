import "./CaseStudy.css";

import hero from "../../Assets/CaseStudy/Hero/Group 3.png";
import LikeIcon from "../../Assets/CaseStudy/Hero/Like.svg";
import featuredSuccess from "../../Assets/CaseStudy/FeaturedStory/featrued.png";

import Button from "../../Components/Custom/Button/Button";
import NumbersCard from "../../Components/Custom/NumbersCard/NumbersCard";
import BlogCard from "../../Components/Custom/BlogCard/BlogCard";

import data from "../../data";
import CountUp from "react-countup";
import { useInView } from "../../Hooks/useInView";

function CaseStudy() {
  const [ref, inView] = useInView({ threshold: 0.6 });

  const successStories = data.successStories;
  return (
    <>
      {/* Case Studies */}
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
                <div ref={ref} className="p-4 d-flex flex-column gap-1">
                  <h5 className="title">
                    {inView ? (
                      <CountUp start={0} redraw={true} end="99" duration={3} />
                    ) : (
                      0
                    )}
                    {" % "}
                  </h5>{" "}
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
      {/*  featured Success stories */}
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
                    <span style={{ lineHeight: "25px", fontWeight: "bold" }}>
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
      {/* Impact Numbers */}
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
      {/* More Success Stories  */}
      <section>
        <div className="container">
          <div className="MoreStories d-flex flex-column align-items-center gap-5">
            <div className="mb-0 mb-lg-5">
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  lineHeight: "120%",
                }}
              >
                {" "}
                More Success Stories{" "}
              </h2>
            </div>
            <div
              className="d-flex justify-content-center align-items-start gap-2 gap-lg-4 flex-column flex-lg-row "
            >
              {successStories.map((story, index) => (
                <div key={index}>
                  <BlogCard
                    tag={story.tag}
                    tagBg={story.tagBg}
                    title={story.title}
                    image={story.image}
                    heightVariant="fixed" 
                    className="p-3"
                  >
                    {story.description}
                  </BlogCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Industry Impact */}

      <section>
        <div className="container">
          <div className="d-flex flex-column gap-5">
            {/* text Content */}
            <div className="industry__impact-content d-flex flex-column align-items-center gap-2 gap-lg-4 mb-0 mb-lg-5">
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  lineHeight: "120%",
                }}
              >
                {" "}
                Industry Impact{" "}
              </h2>
              <p
                style={{
                  maxWidth: "654px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
                className="text-center"
              >
                We empower businesses across diverse industries by delivering
                customized Odoo solutions that drive growth, enhance efficiency,
                and support digital transformation.
              </p>
            </div>
            <div
              className="industry__impact-cards row p-4 rounded-3 "
              style={{ backgroundColor: "#F9F5F9" }}
            >
              {/* Manufacturing */}
              <div className="col-12 col-lg-4 mb-4 mb-lg-0 ">
                <div className="industry__impact-card h-100 d-flex flex-column gap-3 ">
                  {/* Icon */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M20.716 46C20.3673 45.9975 20.0311 45.8703 19.7681 45.6414C19.505 45.4125 19.3326 45.097 19.282 44.752L18.706 40.6C17.7745 40.3031 16.8694 39.9292 16 39.482L12.662 42.014C12.383 42.2244 12.0374 42.327 11.6888 42.3031C11.3401 42.2793 11.0118 42.1304 10.764 41.884L6.11801 37.234C5.87157 36.9862 5.72275 36.6579 5.69887 36.3093C5.67499 35.9606 5.77765 35.6151 5.98801 35.336L8.51801 32C8.06933 31.1313 7.69531 30.2261 7.40001 29.294L3.24801 28.714C2.90233 28.6666 2.58548 28.4957 2.35606 28.2328C2.12664 27.97 2.00016 27.6329 2.00001 27.284V20.712C1.99875 20.3495 2.1341 19.9998 2.37908 19.7325C2.62407 19.4653 2.96073 19.3002 3.32201 19.27L7.40001 18.704C7.69557 17.7724 8.07027 16.8678 8.52001 16L6.00001 12.658C5.78965 12.3789 5.68699 12.0334 5.71087 11.6847C5.73475 11.3361 5.88357 11.0078 6.13001 10.76L10.768 6.124C11.0161 5.87913 11.3441 5.73182 11.6919 5.70904C12.0397 5.68627 12.3841 5.78956 12.662 6L16 8.518C16.87 8.06908 17.7766 7.69506 18.71 7.4L19.27 3.358L19.282 3.246C19.3315 2.90069 19.5036 2.58474 19.767 2.35595C20.0303 2.12715 20.3672 2.0008 20.716 2H27.288C27.6359 2.00182 27.9716 2.12867 28.2337 2.35742C28.4959 2.58616 28.6671 2.90154 28.716 3.246L29.296 7.398C30.228 7.69175 31.1327 8.06582 32 8.516L35.344 6C35.5954 5.81109 35.9015 5.70928 36.216 5.71C36.4058 5.70898 36.594 5.74577 36.7694 5.81823C36.9449 5.89068 37.1042 5.99734 37.238 6.132L41.876 10.76C42.1205 11.0083 42.2676 11.3362 42.2903 11.6839C42.3131 12.0316 42.21 12.376 42 12.654L39.482 16C39.9293 16.8686 40.3033 17.7731 40.6 18.704L44.748 19.28C45.0939 19.3285 45.4108 19.4999 45.6407 19.7629C45.8705 20.0258 45.9981 20.3627 46 20.712V27.284C45.9977 27.6321 45.8704 27.9678 45.6413 28.2299C45.4123 28.492 45.0967 28.6631 44.752 28.712L40.604 29.292C40.3079 30.225 39.9325 31.131 39.482 32L42 35.34C42.2093 35.6187 42.3113 35.9635 42.2874 36.3112C42.2635 36.6589 42.1154 36.9865 41.87 37.234L37.232 41.882C36.9593 42.1529 36.5904 42.3047 36.206 42.304C35.8918 42.305 35.586 42.2024 35.336 42.012L32 39.482C31.1295 39.9309 30.223 40.3062 29.29 40.604L28.728 44.676C28.7258 44.8594 28.686 45.0405 28.6112 45.208C28.5365 45.3756 28.4282 45.526 28.2932 45.6502C28.1581 45.7744 27.9991 45.8697 27.8259 45.9302C27.6527 45.9907 27.469 46.0151 27.286 46.002L20.716 46ZM16.622 36.524C17.7949 37.2184 19.0611 37.7417 20.382 38.078C20.6606 38.1475 20.9119 38.2991 21.1034 38.513C21.2949 38.7269 21.4177 38.9934 21.456 39.278L21.99 43.116H26.046L26.58 39.278C26.6183 38.9934 26.7412 38.7269 26.9327 38.513C27.1241 38.2991 27.3754 38.1475 27.654 38.078C28.9737 37.7438 30.2386 37.2218 31.41 36.528C31.6557 36.3828 31.9391 36.3141 32.224 36.3304C32.5089 36.3468 32.7826 36.4476 33.01 36.62L36.09 38.954L38.95 36.088L36.624 33C36.4519 32.7723 36.3515 32.4986 36.3355 32.2137C36.3194 31.9288 36.3886 31.6455 36.534 31.4C37.2275 30.229 37.7502 28.9649 38.086 27.646C38.1554 27.3672 38.3069 27.1156 38.5208 26.9238C38.7347 26.7319 39.0013 26.6087 39.286 26.57L43.124 26.038V21.978L39.286 21.446C39.0013 21.4073 38.7347 21.2841 38.5208 21.0922C38.3069 20.9004 38.1554 20.6488 38.086 20.37C37.7502 19.0505 37.2275 17.7857 36.534 16.614C36.3872 16.3689 36.3174 16.0854 36.3334 15.8002C36.3495 15.515 36.4507 15.2411 36.624 15.014L38.952 11.928L36.094 9.068L33 11.4C32.7721 11.5718 32.4983 11.6718 32.2134 11.6875C31.9285 11.7032 31.6453 11.6337 31.4 11.488C30.2288 10.7953 28.9647 10.2734 27.646 9.938C27.3672 9.86859 27.1156 9.71712 26.9238 9.5032C26.732 9.28927 26.6087 9.02271 26.57 8.738L26.036 4.9H21.98L21.452 8.74C21.413 9.02462 21.2897 9.29104 21.0979 9.50492C20.9062 9.7188 20.6547 9.87034 20.376 9.94C19.0558 10.2786 17.79 10.8018 16.616 11.494C16.3946 11.6256 16.1416 11.6947 15.884 11.694C15.5698 11.6927 15.2646 11.5895 15.014 11.4L11.93 9.066L9.06401 11.926L11.4 15C11.5734 15.2269 11.6751 15.5005 11.6918 15.7856C11.7086 16.0707 11.6397 16.3543 11.494 16.6C10.7962 17.7748 10.2728 19.0447 9.94001 20.37C9.87109 20.6491 9.71978 20.9009 9.50576 21.0929C9.29174 21.2848 9.02492 21.4078 8.74001 21.446L4.90001 21.978V26.036L8.73601 26.568C9.02092 26.6062 9.28774 26.7292 9.50176 26.9211C9.71578 27.1131 9.86709 27.3649 9.93601 27.644C10.2747 28.9635 10.7993 30.2282 11.494 31.4C11.6389 31.6459 11.7073 31.9294 11.6906 32.2143C11.6738 32.4992 11.5727 32.7727 11.4 33L9.06401 36.09L11.93 38.956L15.014 36.618C15.2415 36.4456 15.5151 36.3448 15.8 36.3284C16.0849 36.3121 16.3683 36.3808 16.614 36.526L16.622 36.524ZM14.316 24C14.3164 22.0828 14.8854 20.2089 15.9509 18.6151C17.0165 17.0214 18.5308 15.7794 20.3023 15.0464C22.0738 14.3134 24.0228 14.1222 25.903 14.4971C27.7831 14.8719 29.5099 15.7959 30.8648 17.1523C32.2198 18.5086 33.142 20.2363 33.5149 22.1168C33.8878 23.9974 33.6946 25.9463 32.9598 27.717C32.2249 29.4877 30.9814 31.0007 29.3866 32.0646C27.7917 33.1286 25.9172 33.6956 24 33.694C21.4315 33.6887 18.9699 32.6654 17.1547 30.8482C15.3395 29.0311 14.3187 26.5685 14.316 24ZM17.2 24C17.2 25.3449 17.5988 26.6596 18.346 27.7779C19.0932 28.8961 20.1552 29.7677 21.3978 30.2824C22.6403 30.7971 24.0076 30.9317 25.3266 30.6693C26.6457 30.407 27.8573 29.7593 28.8083 28.8083C29.7593 27.8573 30.407 26.6457 30.6693 25.3266C30.9317 24.0075 30.7971 22.6403 30.2824 21.3978C29.7677 20.1552 28.8961 19.0932 27.7779 18.346C26.6596 17.5988 25.3449 17.2 24 17.2C22.1965 17.2 20.4669 17.9164 19.1917 19.1917C17.9164 20.4669 17.2 22.1965 17.2 24Z"
                        fill="#150E25"
                      />
                    </svg>
                  </div>
                  {/* Title + underline */}
                  <h4 className="fw-bold border-bottom border-2 pb-4 mb-3">
                    Manufacturing
                  </h4>
                  {/* Bullet list */}
                  <ul>
                    <li className="mb-2">40% reduced inventory costs</li>
                    <li>60% faster production cycles</li>
                  </ul>
                </div>
              </div>

              {/* Retail */}
              <div className="col-12 col-md-4 mb-4 mb-lg-0 ">
                <div className="industry__impact-card h-100 d-flex flex-column gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M27.666 42.0002V27.0002C27.666 26.1718 28.3376 25.5002 29.166 25.5002H35.166C35.9944 25.5002 36.666 26.1718 36.666 27.0002V42.0002M27.666 42.0002H5.38777M27.666 42.0002H36.666M36.666 42.0002H43.9443M41.166 42.0002V18.6978M8.16602 42.0002V18.6983M8.16602 18.6983C10.4606 20.0245 13.4456 19.7061 15.4087 17.743C15.4979 17.6538 15.5837 17.5624 15.6662 17.4691C16.7656 18.7147 18.3741 19.5002 20.166 19.5002C21.9581 19.5002 23.5666 18.7146 24.666 17.4689C25.7654 18.7146 27.374 19.5002 29.166 19.5002C30.9579 19.5002 32.5662 18.7147 33.6657 17.4694C33.748 17.5625 33.8337 17.6537 33.9228 17.7428C35.8861 19.7061 38.8714 20.0244 41.166 18.6978M8.16602 18.6983C7.72178 18.4415 7.30343 18.1231 6.92337 17.743C4.58023 15.3999 4.58023 11.6009 6.92337 9.25774L9.30195 6.87917C9.86456 6.31656 10.6276 6.00049 11.4233 6.00049H37.9084C38.704 6.00049 39.4671 6.31656 40.0297 6.87917L42.4081 9.25757C44.7512 11.6007 44.7512 15.3997 42.4081 17.7428C42.0282 18.1227 41.61 18.441 41.166 18.6978M14.166 36.0002H21.666C22.4944 36.0002 23.166 35.3286 23.166 34.5002V27.0002C23.166 26.1718 22.4944 25.5002 21.666 25.5002H14.166C13.3376 25.5002 12.666 26.1718 12.666 27.0002V34.5002C12.666 35.3286 13.3376 36.0002 14.166 36.0002Z"
                        stroke="#0F172A"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="fw-bold border-bottom border-2 pb-4 mb-3">
                    Retail
                  </h4>
                  <ul>
                    <li className=" mb-2">
                      <span>50% improved stock accuracy</span>
                    </li>
                    <li>
                      <span>30% increased sales</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="col-12 col-md-4">
                <div className="industry__impact-card h-100 d-flex flex-column gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M34.834 13.5L45.334 24L34.834 34.5M13.834 34.5L3.33398 24L13.834 13.5M28.834 7.5L19.834 40.5"
                        stroke="#0F172A"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="fw-bold border-bottom border-2 pb-4 mb-3">
                    Services
                  </h4>
                  <ul>
                    <li className="  mb-2" style={{}}>
                      45% better resource utilization
                    </li>
                    <li>35% increased productivity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
