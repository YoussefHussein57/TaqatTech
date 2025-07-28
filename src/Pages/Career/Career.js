import "./Career.css";

import HeroTxt1 from "../../Assets/Career/Hero/Hero text.png";
import HeroTxt2 from "../../Assets/Career/Hero/Hero Txt 2.png";
import HeroTxt3 from "../../Assets/Career/Hero/HeroTxt3.png";
import HeroTxt4 from "../../Assets/Career/Hero/HeroTxt4.png";

import JobsListing from "../../Components/Custom/JobsListing/JobsListing";
import { fetchRemoteJobs } from "../../API/JobSearch";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const list = await fetchRemoteJobs(20);
        setJobs(list);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading open positions…</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  // Only show the first 5 here as a teaser
  const teaser = jobs.slice(0, 5);

  return (
    <>
      <section>
        <div className="container">
          <div className="career-hero d-flex flex-column align-items-center gap-3  text-center ">
            <h4>Career</h4>
            <h2 className="mb-4">Build Your Future with TaqaTechno</h2>
            <p className="mb-5">
              Empower Your Career. Transform the Digital World.
            </p>
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-4">
              {/* First column in the Hero  */}
              <div className="card background-1  career-card d-flex flex-coulmn  justify-content-between h-100 border-0 gap-4 gap-lg-0 p-4 w-100 rounded-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="mb-4"
                >
                  <path
                    d="M5 21.875C5 20.8395 5.83947 20 6.875 20H10.625C11.6605 20 12.5 20.8395 12.5 21.875V33.125C12.5 34.1605 11.6605 35 10.625 35H6.875C5.83947 35 5 34.1605 5 33.125V21.875Z"
                    stroke="#150E25"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.25 14.375C16.25 13.3395 17.0895 12.5 18.125 12.5H21.875C22.9105 12.5 23.75 13.3395 23.75 14.375V33.125C23.75 34.1605 22.9105 35 21.875 35H18.125C17.0895 35 16.25 34.1605 16.25 33.125V14.375Z"
                    stroke="#150E25"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.5 6.875C27.5 5.83947 28.3395 5 29.375 5H33.125C34.1605 5 35 5.83947 35 6.875V33.125C35 34.1605 34.1605 35 33.125 35H29.375C28.3395 35 27.5 34.1605 27.5 33.125V6.875Z"
                    stroke="#150E25"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column gap-2">
                  <h5>Growth Opportunities</h5>
                  <p>Continuous learning and career advancement paths</p>
                </div>
              </div>
              <div>
                <img
                  src={HeroTxt1}
                  alt=" Hero First "
                  style={{ maxWidth: 316 }}
                  className="w-100"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="second-column col-lg-3 col-md-6 mt-4 mb-4 mt-md-0 m-lg-0 d-flex flex-column align-items-center">
              <div className=" ">
                <img
                  src={HeroTxt2}
                  alt="Hero"
                  className="w-100 "
                  style={{ maxWidth: 316 }}
                />
              </div>
            </div>
            {/* Third Column */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-4 mb-4 mb-lg-0">
              <div className="order-2 order-lg-1 ">
                <img
                  src={HeroTxt3}
                  alt=" Hero Third "
                  style={{ maxWidth: 316 }}
                  className="w-100"
                />
              </div>
              <div className="card background-2 career-card d-flex flex-coulmn align-items-center h-100 justify-content-between border-0 gap-4 gap-lg-0 p-4 w-100 rounded-5 order-1 order-lg-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M6.25 5V23.75C6.25 25.8211 7.92893 27.5 10 27.5H13.75M6.25 5H3.75M6.25 5H33.75M33.75 5H36.25M33.75 5V23.75C33.75 25.8211 32.0711 27.5 30 27.5H26.25M13.75 27.5H26.25M13.75 27.5L12.0833 32.5M26.25 27.5L27.9167 32.5M27.9167 32.5L28.75 35M27.9167 32.5H12.0833M12.0833 32.5L11.25 35M12.5 20L17.5 15L21.0793 18.5793C22.757 16.1717 24.9506 14.1504 27.5 12.6756"
                    stroke="#150E25"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column gap-2">
                  <h5>Innovative Environment</h5>
                  <p className="w-100">
                    Work with cutting-edge technologies and methodologies
                  </p>
                </div>
              </div>
            </div>
            {/* Fourth Column */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-4 ">
              <div className="card background-3 career-card d-flex flex-coulmn justify-content-between h-100 border-0 gap-4 gap-lg-0 p-4 w-100 rounded-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M25 31.8793C26.3882 32.2833 27.8563 32.5 29.3749 32.5C31.8395 32.5 34.1709 31.9294 36.244 30.913C36.2479 30.8175 36.2499 30.7215 36.2499 30.625C36.2499 26.828 33.1719 23.75 29.3749 23.75C27.0115 23.75 24.9267 24.9425 23.6893 26.7587M25 31.8793V31.875C25 30.0202 24.5247 28.2764 23.6893 26.7587M25 31.8793C25 31.9387 24.9995 31.998 24.9985 32.0572C21.8956 33.9254 18.2608 35 14.375 35C10.4892 35 6.8544 33.9254 3.75153 32.0572C3.75051 31.9966 3.75 31.9359 3.75 31.875C3.75 26.007 8.50698 21.25 14.375 21.25C18.3882 21.25 21.8817 23.475 23.6893 26.7587M20 10.625C20 13.7316 17.4816 16.25 14.375 16.25C11.2684 16.25 8.75 13.7316 8.75 10.625C8.75 7.5184 11.2684 5 14.375 5C17.4816 5 20 7.5184 20 10.625ZM33.75 14.375C33.75 16.7912 31.7912 18.75 29.375 18.75C26.9588 18.75 25 16.7912 25 14.375C25 11.9588 26.9588 10 29.375 10C31.7912 10 33.75 11.9588 33.75 14.375Z"
                    stroke="#150E25"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column gap-2">
                  <h5>Great Culture</h5>
                  <p>Collaborative, inclusive, and supportive workplace</p>
                </div>
              </div>
              <div>
                <img
                  src={HeroTxt4}
                  alt=" Hero First "
                  style={{ maxWidth: 316 }}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-start gap-5 industries__container ">
            {/* Left Text Column */}
            <div className=" col-lg-5">
              <h2 className="fw-bold text-dark">Benefits & Perks</h2>
            </div>

            {/* Right Tags Column */}
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-wrap gap-4">
                {[
                  "Competitive Salary",
                  "Modern Equipment",
                  "Remote Work Options",
                  "Paid Time Off",
                  "Professional Development",
                  "Team Events",
                  "Performance Bonuses",
                  "Health Insurance",
                ].map((industry, index) => (
                  <span key={index} className="industry-pill px-3 py-3">
                    <strong>{industry}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          {/* Heading + total count + View All link */}
          <div className="d-flex justify-content-between align-items-baseline mb-4">
            <div className="jobs d-flex flex-column gap-3">

            <h2 className="mb-0" style={{
                fontSize: 48,
                fontWeight:700,
                lineHeight:"120%"
            }}>
              Open Positions
            </h2>
            <p style={{
                fontSize: 18,
                fontWeight: 500,
                lineHeight:"150%",
                opacity:0.6
            }}>
                {jobs.length} Positions

            </p>
            </div>
            <NavLink to="/Career/All-jobs" className="h5 text-decoration-none view-link">
              View all 
            </NavLink>
          </div>

          {/* Teaser list */}
          {teaser.map((job) => (
            <JobsListing
              key={job.id}
              title={job.title}
              location={job.candidate_required_location}
              type={job.job_type}
              experience="0-3 Years"
              date={new Date(job.publication_date).toLocaleDateString()}
            />
          ))}
        </div>
      </section>
    </>
  );
}
