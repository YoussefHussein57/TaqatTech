import React from "react";
import "./BlogCard.css";
import { NavLink } from "react-router-dom";

function BlogCard({
  children,
  className = "",
  image,
  title,
  tag,
  tagBg = "#FEF9C3",
}) {
  return (
    <div
      className={`card  ${className} blog-card shadow-sm`}
      style={{height:"470px"}}
    >
      {image && <img src={image} className="card-img-top top-img" alt={title} />}
      <div className="card-body d-flex flex-column gap-2">
        {tag && (
          <span
            className="badge text-dark fw-medium mb-4"
            style={{ backgroundColor: tagBg, width: "fit-content" }}
          >
            {tag}
          </span>
        )}
        <h5 className="card-title" style={{fontWeight:700 , fontSize:"20"}}>{title}</h5>
        <div className="card-text flex-grow-1" style={{fontWeight:500 ,color:"#150E25"}}>{children}</div>

        {/* Read More link with arrow */}
        <NavLink
          path="/"
          className="btn  border-1 d-flex justify-content-between align-items-center mt-auto gap-2 read-more-link"
        >
          <span>Read More</span>
          <span>&rarr;</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogCard;
