import "./FilterBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function FilterBar({ filter, setFilter, onSearch }) {
  const options = ["All", "Odoo tips", "Implementation", "Personal growth"];

  return (
    <div className="btns  d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between p-3">
      {/* Filter buttons */}
      <div className="d-flex align-items-center gap-2 order-2 order-lg-1 ">
        {options.map((name) => (
          <button
            key={name}
            type="button"
            className={`filter-btn ${filter === name ? "active" : ""} rounded-3`}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Search input with icon */}
      <div className="input-group search-group search w-auto rounded-5  order-1 order-lg-2 mb-4 mb-lg-0" style={{borderColor:"#2E1E51"}}>
        <span className="input-group-text bg-white border-0 rounded-5">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="search"
          className="form-control border-0 rounded-5"
          style={{borderColor:"#2E1E51"}}
          placeholder="Search…"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterBar;
