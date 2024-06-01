import React from "react";
import Image from "next/image";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  return (
    <div className="flex items-center gap-3">
      {currentPage > 1 && (
        <button onClick={handlePreviousPage}>
          <Image
            src="/assets/arrow-left.svg"
            alt="arrow-left"
            width={40}
            height={40}
          />
        </button>
      )}
      {currentPage < totalPages && (
        <button onClick={handleNextPage}>
          <Image
            src="/assets/arrow-right.svg"
            alt="arrow-right"
            width={40}
            height={40}
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
