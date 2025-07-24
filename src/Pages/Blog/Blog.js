import FilterBar from "../../Components/Custom/FilterBar/FilterBar";
import BlogCard from "../../Components/Custom/BlogCard/BlogCard";

import React, { useState, useMemo } from "react";

import data from "../../data";

export default function Blog() {
  const stories = data.stories;
  //state for the filer and search term
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // handler for search input

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  //compute the filtered list
  const visbleStories = useMemo(() => {
    return stories
      .filter((story) => {
        if (filter === "All") return true;
        return (story.description = filter);
      })
      .filter((story) => {
        if (searchTerm === "") return true;
        return story.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [filter, searchTerm]);
  return (
    <>
      <section>
        <div className="container">
            <div className="d-flex flex-column gap-5">

          <div className="d-flex flex-column gap-5 ">
            <div className="d-flex flex-column gap-3">
              <h2
                style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "120%",
                }}
                >
                {" "}
                Blog & Insights{" "}
              </h2>
              <h4
                style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "150%",
                }}
                >
                Stay updated with the latest in Odoo and business technology
              </h4>
            </div>

            <FilterBar
              filter={filter}
              setFilter={setFilter}
              onSearch={handleSearch}
            />
            <div className="d-flex flex-column gap-5">
              {/* Section title */}
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: "130%",
                }}
              >
                Featured Posts
              </h3>

              {/* Post card */}
              <div className="row align-items-center">
                {/* Image side */}
                <div className="col-12 col-lg-6">
                  <img
                    src={require("../../Assets/BlogCard/andrew-power-y9L5-wmifaY-unsplash 1.png")}
                    alt="Happy Customer"
                    className="img-fluid rounded-4 w-100"
                  />
                </div>

                {/* Content side */}
                <div className="col-12 col-lg-6 d-flex flex-column gap-3">
                  {/* Category badge */}
                  <span
                    className="badge align-self-start"
                    style={{ backgroundColor: "#FEF9C3", color: "#150E25" }}
                    >
                    Implementation
                  </span>

                  {/* Post title */}
                  <h4
                    style={{
                        fontSize: "40px",
                        fontWeight: 700,
                        lineHeight: "130%",
                    }}
                    >
                    Maximizing ROI with Odoo Implementation
                  </h4>

                  {/* Excerpt */}
                  <p className="text-secondary" style={{ maxWidth: "600px" }}>
                    Learn how to get the most out of your Odoo implementation
                    with these proven strategies and best practices for success.
                  </p>

                  {/* Meta: date */}
                  <small className="text-muted">Mar 16, 2024</small>

                  {/* Author info */}
                  <div className="d-flex align-items-center gap-2 mt-2">
                    <img
                      src={require("../../Assets/AboutUS/Leaders/Sarah.png")}
                      alt="Sarah Chen"
                      className="rounded-circle"
                      width={40}
                      height={40}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <span style={{ fontWeight: 500 }}>Sarah Chen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
                       <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: "130%",
                }}
                className="mb-5"
              >
                More Success Stories
              </h3>
            
            {visbleStories.map((story) => (
                <div key={story.id} className="col-md-4 col-12">
                <BlogCard
                  title={story.title}
                  image={story.image}
                  tag={story.tag}
                  className="border-0"
                  >
                  {story.description}
                </BlogCard>
              </div>
            ))}

            
          </div>
            </div>
        </div>
      </section>
    </>
  );
}
