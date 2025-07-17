import "./AboutUs.css";

import heroPhoto from "../../Assets/AboutUS/Vector.png";
import OurStory from "../../Assets/AboutUS/story.jpg";
import ServiceCard from "../../Components/Custom/ServiceCard/ServiceCard";
import data from "../../data";

export default function About() {
    const values = data.values;

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
        <div className="OurStory__container container d-flex flex-column flex-xl-row  align-items-start">
          <div className="OurStory__img">
            <img src={OurStory} alt="Story" />
          </div>
          <div className="OurStory__txt d-flex flex-column align-items-start ">
            <div>
              <h2 className="OurStory__title">Our Story</h2>
            </div>
            <div className="OurStory__desc d-flex flex-column align-items-start gap-3 ">
              <h3>Founded in 2010</h3>
              <h4>
                TaqaTechno began as a small tech consultancy with a vision to
                transform businesses through technology.
              </h4>
              <p>
                Over the years, we have evolved into a leading Odoo
                implementation partner, helping organizations streamline
                operations, optimize workflows, and unlock new growth
                opportunities.
              </p>
              <p>
                Our journey is defined by innovation, expertise, and a steadfast
                commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="values">
        <div className="values__container container d-flex flex-column flex-xl-row  align-items-start justify-content-center">
          <div className="values__txt d-flex flex-column align-items-start gap-4 ">
            <h2 className="values__title">Our Values</h2>
            <p>
              Over the years, we have evolved into a leading Odoo implementation
              partner, helping organizations streamline operations, optimize
              workflows, and unlock new growth opportunities.
            </p>
          </div>
          <div className="d-flex flex-column gap-2 text-light">
            {values.map((value, index) => (
              <div key={index} className="col  darkBg">
                <ServiceCard {...value} className="fontShape" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
