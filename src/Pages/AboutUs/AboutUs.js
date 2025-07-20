import "./AboutUs.css";

import heroPhoto from "../../Assets/AboutUS/Vector.png";
import OurStory from "../../Assets/AboutUS/story.png";
import ServiceCard from "../../Components/Custom/ServiceCard/ServiceCard";
import data from "../../data";

export default function About() {
  const values = data.values;
  const leaders = data.leaders;
  const certificates = data.certificates;

  return (
    <>
      <section className="Partner">
        <div className="Partner__container container d-flex flex-column flex-xl-row justify-content-between align-items-xl-center">
          <div className="heroAbout d-flex flex-column order-2 order-xl-1 align-items-start">
            <h2 className="heroAbout__title "> About TaqaTechno </h2>
            <h3 className="heroAbout__txt">
              Your trusted partner in digital transformation.
            </h3>
            <p className="heroAbout__desc">
              We empower businesses with innovative Odoo solutions tailored to
              enhance efficiency, scalability, and growth.
            </p>
          </div>
          <div className="heroAbout__img order-1 order-xl-2 ">
            <img src={heroPhoto} alt="logo" />
          </div>
        </div>
      </section>
      <section className="OurStory">
        <div className="OurStory__container  container  ">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="OurStory__img  ">
                <img
                  src={OurStory}
                  alt="Story"
                  className="w-100 h-100 rounded-5 mb-5 mb-xl-0"
                />
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="ps-3">
                <div className="border-bottom w-100">
                  <h2 className=" pb-2 mb-2 pb-xl-5 mb-xl-5 title" style={{ fontWeight: "700" }}>
                    Our Story
                  </h2>
                </div>
                <div className=" pt-3 mt-4     ">
                  <h3 className="pb-3 " style={{ color: "#7F2E8C" }}>
                    Founded in 2010
                  </h3>
                  <h4 className="pb-2" style={{ fontSize: "24px" }}>
                    TaqaTechno began as a small tech consultancy with a vision
                    to transform businesses through technology.
                  </h4>
                  <p>
                    Over the years, we have evolved into a leading Odoo
                    implementation partner, helping organizations streamline
                    operations, optimize workflows, and unlock new growth
                    opportunities.
                  </p>
                  <p>
                    Our journey is defined by innovation, expertise, and a
                    steadfast commitment to our clients' success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="values">
        <div className="values__container container d-flex flex-column flex-xl-row  align-items-center align-items-xl-start justify-content-center">
          <div className="values__txt d-flex flex-column align-items-start gap-4 ps-3">
            <h2 className="values__title">Our Values</h2>
            <p>
              Over the years, we have evolved into a leading Odoo implementation
              partner, helping organizations streamline operations, optimize
              workflows, and unlock new growth opportunities.
            </p>
          </div>
          <div className="d-flex flex-column gap-4 text-light">
            {values.map((value, index) => (
              <div key={index} className="col  darkBg valuesHover ">
                <ServiceCard
                  {...value}
                  size="lg"
                  className="fontShape d-flex flex-column flex-xl-row gap-4 align-items-xl-center align-items-start "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="leadership">
        <div className="leadership__container container d-flex flex-column align-items-center">
          <div className="txt d-flex flex-column align-items-center gap-4 ">
            <h2 className="title">Our Leadership Team</h2>
            <p className="text-center desc">
              The driving force behind TaqaTechno’s success is our team of
              industry experts and visionaries.
            </p>
          </div>
          <div className=" d-flex flex-column flex-xl-row justify-content-center align-items-start">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="leadership__images d-flex flex-column flex-xl-row align-items-center justify-content-center"
              >
                <div className="leaders__images d-flex flex-column align-items-center p-3 p-xl-5">
                  <img src={leader.image} alt={leader.name}  style={{objectFit:"cover"}} />
                  <div className="d-flex flex-column gap-1 align-items-center">
                    <h5 className="card-title">{leader.name}</h5>
                    <p className="card-text">{leader.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="certifications">
        <div className="certifications__container container d-flex flex-column  align-items-center gap-2 gap-xl-5">
          <div className="txt d-flex flex-column align-items-center gap-2  ">
            <h2 className="title">Our Certifications</h2>
            <p className="desc text-center" style={{ maxWidth: "660px" }}>
              We uphold the highest standards of expertise through continuous
              learning and internationally recognized certifications.
            </p>
          </div>
          <div className="d-flex flex-column flex-xl-row justify-content-center align-items-start gap-5">
            {certificates.map((cert, index) => (
              <div
                className="card fullCards d-flex flex-column align-items-center p-3 gap-3"
                key={index}
              >
                <img src={cert.image} class="card-img-top" alt="" />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text text-center">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
