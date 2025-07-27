import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import BlogCard from "../../Components/Custom/BlogCard/BlogCard";
import data from "../../data";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const post = data.stories.find((p) => p.id.toString() === id);
  if (!post) return <Navigate to="/blog" replace />;

  const socialIcons = [faFacebookF, faYoutube, faXTwitter, faInstagram];
  const more = data.stories.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Main content */}
      <section>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">

              {/* Breadcrumb */}
              <nav className="breadcrumb mb-3">
                <Link to="/blog">Blog</Link> &gt;{" "}
                <span className="text-secondary">{post.tag}</span>
              </nav>

              {/* Title */}
              <h1 className="bd-title">{post.title}</h1>

              {/* Author + date */}
              <div className="d-flex align-items-center mb-4 bd-meta">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="bd-avatar me-2"
                />
                <div className="d-flex align-items-start gap-2">
                  <div className="bd-author">{post.author.name}</div>
                  <div className="text-secondary">|</div>
                  <div className="bd-date">{post.date}</div>
                </div>
              </div>

              {/* Hero image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="img-fluid rounded-4 mb-4 bd-hero w-100"
                />
              )}

              {/* Top Social Icons */}
              <div className="bd-share-icons d-flex justify-content-start gap-3">
                {socialIcons.map((icon, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={icon}
                    className="bd-social-icon"
                  />
                ))}
              </div>

              {/* Body */}
              <div className="bd-body mt-4">
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>

              {/* Bottom Social Icons */}
              <div className="bd-share-icons d-flex justify-content-start gap-3">
                {socialIcons.map((icon, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={icon}
                    className="bd-social-icon"
                  />
                ))}
              </div>

              {/* Author only */}
              <div className="d-flex justify-content-start align-items-center bd-author-only-wrap">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="bd-avatar me-2"
                />
                <div className="bd-author-only">{post.author.name}</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="bd-more-section">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 ">

              <h2 className="bd-more-title mb-5">
                More Success Stories
              </h2>

              <div className="row g-4">
                {more.map((p) => (
                  <div key={p.id} className="col-12 col-md-6 col-lg-4">
                    <BlogCard
                      id={p.id}
                      title={p.title}
                      image={p.image}
                      tag={p.tag}
                      variant="borderless"
                      className="border-0"
                    >
                      {p.description}
                    </BlogCard>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
