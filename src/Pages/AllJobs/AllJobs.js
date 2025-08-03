import JobsListing from "../../Components/Custom/JobsListing/JobsListing";
import JobsSearchBar from "../../Components/Custom/JobSearchBar/JobSearchBar";
import Pagination from "../../Components/Custom/Pagination/pagination";
import { fetchRemoteJobs } from "../../API/JobSearch";
import { useState, useEffect, useMemo } from "react";

function AllJobs() {
  const [allJobs, setAllJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 100; // or compute from your data

  useEffect(() => {
    async function load() {
      try {
        const jobs = await fetchRemoteJobs(100);
        setAllJobs(jobs);
        setSearchQuery(jobs);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []); // ← only run once

  // derive department options
  const departments = useMemo(
    () => [...new Set(allJobs.map((j) => j.category))],
    [allJobs]
  );

  // derive city options
  const cities = useMemo(
    () => [...new Set(allJobs.map((j) => j.candidate_required_location))],
    [allJobs]
  );

  const handleSearch = ({ department, city, keyword }) => {
    let filtered = allJobs;

    if (department) {
      filtered = filtered.filter((j) => j.category === department);
    }
    if (city) {
      filtered = filtered.filter((j) => j.candidate_required_location === city);
    }
    if (keyword) {
      const kw = keyword.toLowerCase();
      filtered = filtered.filter(
        (j) =>
          j.title.toLowerCase().includes(kw) ||
          (j.description && j.description.toLowerCase().includes(kw))
      );
    }

    setSearchQuery(filtered);
  };

  return (
    <section>
      <div className="container ">
        {/* Heading + total count + View All link */}
        <div className="d-flex flex-column gap-5">
          <div className="d-flex justify-content-between align-items-baseline mb-4">
            <div className="jobs d-flex flex-column gap-3">
              <h2
                className="mb-0"
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  lineHeight: "120%",
                }}
              >
                Open Positions
              </h2>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: "150%",
                  opacity: 0.6,
                }}
              >
                {allJobs.length} Positions
              </p>
            </div>
          </div>

          <JobsSearchBar
            departments={departments}
            cities={cities}
            onSearch={handleSearch}
          />

          <div>
            {/* Teaser list */}
            {loading ? (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div
                  className="spinner-border text-secondary"
                  role="status"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <span className="visually-hidden">Loading…</span>
                </div>
              </div>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              searchQuery.slice(0, 10).map((job) => (
                <JobsListing
                  key={job.id}
                  title={job.title}
                  location={job.candidate_required_location}
                  type={job.job_type}
                  experience="0-3 Years"
                  date={new Date(job.publication_date).toLocaleDateString()}
                  path={`/career/job/${job.id}`} // <-- route to job description
                  state={{ job }}
                />
              ))
            )}
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllJobs;
