import React from "react";
import "./BlogCard.css";

function BlogCard({ children, className = "", image, title, tag }) {
  return (
    <div className={`card h-100 ${className} blog-card shadow-sm`} style={{ maxWidth: "100%" }}>
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column gap-2">
        {tag && (
          <span
            className="badge text-dark fw-medium"
            style={{ backgroundColor: "#FEF9C3", width: "fit-content" }}
          >
            {tag}
          </span>
        )}
        <h5 className="card-title">{title}</h5>
        <div className="card-text flex-grow-1">{children}</div>

        {/* Read More link with arrow */}
        <a href="#" className="btn p-0 text-primary d-flex justify-content-between align-items-center mt-auto gap-2 read-more-link">
          <span>Read More</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
