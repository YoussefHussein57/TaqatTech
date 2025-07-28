// src/components/JobsListing/JobsListing.jsx
import "./JobsListing.css";
import Button from "../Button/Button";

function JobsListing({
  title,
  location,
  type,
  experience,
  date,
}) {
  return (
    <div
      className="job-card d-flex flex-column flex-md-row  justify-content-between align-items-start align-items-md-center gap-4 gap-md-0 mb-4 p-4 rounded-3"
    >
      <div>
        <h5 className="fw-bolder mb-2">{title}</h5>
        <div className="d-flex align-items-center text-secondary small mb-2">
          <span>{location}</span>
          <span className="mx-2">|</span>
          <span>{type}</span>
          <span className="mx-2">|</span>
          <span>{experience}</span>
        </div>
        <small className="text-secondary">{date}</small>
      </div>
      <Button  className="px-4 py-2">
        Apply now &rarr;
      </Button>
    </div>
  );
}

export default JobsListing;
