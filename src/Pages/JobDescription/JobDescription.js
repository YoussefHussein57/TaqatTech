import React from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation, Navigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../../Components/Custom/Button/Button";

import "./JobDescription.css";

export default function JobDescription() {
  const { id } = useParams();
  const { state } = useLocation();
  const job = state?.job;

  // if someone lands here directly without link-state, redirect back:
  if (!job || job.id.toString() !== id) {
    return <Navigate to="/career/all-jobs" replace />;
  }
  return (
    <section className="job-details ">
      <div className="container d-flex flex-column align-items-center" >
        {/* Breadcrumb */}

        <nav className="breadcrumb mb-4">
          <Link to="/career">Career</Link> &gt; <span>Job description</span>
        </nav>
        <div className="breadcrumb d-flex flex-column justify-content-center w-100"  style={{maxWidth:"882px"}}>

        {/* Title + Apply button */}
        <div className="row align-items-center mb-4">
          <div className="col">
            <h1 className="fw-bold">{job.title}</h1>
          </div>
          <div className="col-auto">
            <Button className="px-4 py-2 text-light">Apply now &rarr;</Button>
          </div>
        </div>

        {/* Meta */}
        <div className="d-flex text-secondary small mb-4">
          <span>{job.candidate_required_location}</span>
          <span className="mx-2">|</span>
          <span>{job.job_type}</span>
          <span className="mx-2">|</span>
          <span>0-3 Years</span>
        </div>

        {/* Date */}
        <div className="mb-4">
          <small className="text-secondary">
            {new Date(job.publication_date).toLocaleDateString()}
          </small>
        </div>

        <hr className="mb-4" />
        </div>

        {/* JOB DESCRIPTION HEADER */}
        <div className="section-wrapper   align-items-between">
          <h2 className="h4  ">Job description</h2>
            {" "}
        </div>


        {/* About the job */}
        <div className="section-wrapper">
          <h3 className="h5">About the job</h3>
        
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* About the role */}
        <div className="section-wrapper">
          <h3 className="h5">About the role</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Requirements list */}
        <div className="section-wrapper">
          <h3 className="h5">What you’ll need to be successful</h3>
          <ul>
            <li>
              You're a self-motivated, proactive team player. You bias towards
              action and work effectively in a highly ambiguous, ever-changing
              environment. You’re able to hone in on granular details and also
              take a step back to understand the larger strategy and philosophy
              of how and why decisions are made.
            </li>
            <li>
              You’re resourceful. You may not have all the answers, but you know
              how to find them.
            </li>
            <li>
              You have an aptitude for digesting and effectively communicating
              technical concepts across audiences of varying technical ability.
            </li>
            <li>
              You are a team player with a high level of integrity and desire to
              assist your team. When you find processes that work, you will
              document them through playbooks, teach others and champion wider
              adoption.
            </li>
          </ul>
        </div>
        <div className="max-width-wrapper" style={{maxWidth:"882px"}}>


        {/* Social icons */}
        <div className="mb-4">
          <div className="d-flex gap-3">
            {[faFacebookF, faYoutube, faXTwitter, faInstagram].map(
                (icon, i) => (
                    <FontAwesomeIcon key={i} icon={icon} className="social-icon" />
                )
            )}
          </div>
        </div>

        {/* Bottom Apply button */}
        <div className="mb-4 d-flex w-100">
          <Button className="">Apply now &rarr;</Button>
        </div>
            </div>
      </div>
    </section>
  );
}
