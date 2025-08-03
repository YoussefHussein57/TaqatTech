import React from "react";
import "./pagination.css";

const LEFT_ELLIPSIS = "LEFT";
const RIGHT_ELLIPSIS = "RIGHT";

function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => start + idx);
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const siblingCount = 2; // how many pages around the current one

  // total buttons we allow before we start ellipsing
  const totalPageNumbers = siblingCount * 2 + 5;

  let pages = [];

  if (totalPages <= totalPageNumbers) {
    // no ellipsis needed
    pages = range(1, totalPages);
  } else {
    const leftSiblingIndex  = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages - 1
    );

    const showLeftEllipsis  = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 1;

    pages.push(1);

    if (showLeftEllipsis) {
      pages.push(LEFT_ELLIPSIS);
    } else {
      pages.push(...range(2, leftSiblingIndex - 1));
    }

    pages.push(...range(leftSiblingIndex, rightSiblingIndex));

    if (showRightEllipsis) {
      pages.push(RIGHT_ELLIPSIS);
    } else {
      pages.push(...range(rightSiblingIndex + 1, totalPages - 1));
    }

    pages.push(totalPages);
  }

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>

      {pages.map((page, idx) => {
        if (page === LEFT_ELLIPSIS || page === RIGHT_ELLIPSIS) {
          return (
            <button
              key={idx}
              className="pagination-button border-0"
              disabled
            >
              &hellip;
            </button>
          );
        }

        return (
          <button
            key={idx}
            className={`${
              page === currentPage
                ? "pagination-button active"
                : "pagination-button"
            } border-0`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
}
