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
  variant = "bordered",
  heightVariant="fixed",
  id,
}) {
  const borderClass =
    variant === "borderLess" ? "border-less-button" : "read-more-link";
      const heightClass =
    heightVariant === "fixed" ? "fixed-height" : "variable-height";
  // function truncate(text, length = 120) {
  //   return text.length > length ? text.substring(0, length) + "..." : text;
  // }
  return (
    <div
      className={`card  ${className} blog-card shadow-sm mb-3  ${heightClass} `}
      style={{ maxHeight: "570px" }}
    >
      {image && (
        <img src={image} className=" top-img mb-3" alt={title} />
      )}
      <div className="card-body d-flex flex-column gap-2">
        {tag && (
          <span
            className="badge text-dark fw-medium mb-4"
            style={{ backgroundColor: tagBg }}
          >
            {tag}
          </span>
        )}
        <h5 className="card-title truncate-1-line" style={{ fontWeight: 700 }}>
          {title}
        </h5>
        <div
          className="card-text flex-grow-1 mb-3 truncate-3-lines"
          style={{ fontWeight: 500, color: "#150E25", opacity: "0.6" }}
        >
          {children}
          {/* {truncate(children, 130)} */}
        </div>

        {/* Read More link with arrow */}
        <NavLink
          to={`/blog/${id}`}
          className={`btn ${borderClass}  border-1 d-flex justify-content-between align-items-center mt-auto `}
        >
          <span>Read More</span>
          <span>&rarr;</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogCard;
