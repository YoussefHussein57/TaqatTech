import React, { useState } from "react";
import Button from "../Button/Button";

import "./JobSearchBar.css"

export default function JobsSearchBar({
  departments = [],
  cities = [],
  onSearch,
}) {
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ department, city, keyword });
  };

  return (
    <form className="row g-3 mb-4 form-style" onSubmit={handleSubmit}>
            <div className="col-md-4">
        <label className="form-label"> Search </label>
        <input
          type="text"
          className="form-control rounded-5 p-3"
          placeholder="Search by title or keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {/* City */}
      <div className="col-md-3">
        <label className="form-label">City</label>
        <select
          className="form-select rounded-5 p-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">All</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {/* Department */}
      <div className="col-md-3">
        <label className="form-label">Department</label>
        <select
          className="form-select rounded-5 p-3" 
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">All</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>


      {/* Search button */}
      <div className="col-md-2 d-grid align-self-end">
        <Button type="submit" className="h-100 p-3" variant="outline">
          Search
        </Button>
      </div>
    </form>
  );
}
