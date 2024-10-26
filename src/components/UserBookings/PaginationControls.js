import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: 1px solid #007bff;
  background-color: ${(props) => (props.$active ? "#007bff" : "white")};
  color: ${(props) => (props.$active ? "white" : "#007bff")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
    color: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPagesToShow = 3; // Show 3 page numbers
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + totalPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButton
          key={i}
          onClick={() => onPageChange(i)}
          $active={i === currentPage} // Use $active instead of active
        >
          {i}
        </PageButton>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
        &lt; {/* Left Arrow */}
      </PageButton>
      {renderPageNumbers()}
      <PageButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &gt; {/* Right Arrow */}
      </PageButton>
    </PaginationContainer>
  );
};

export default PaginationControls;
