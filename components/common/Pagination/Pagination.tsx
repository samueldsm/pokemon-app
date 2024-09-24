"use client";
import React from "react";
import { Pagination as NextUIPagination } from "@nextui-org/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-4">
      <NextUIPagination
        total={totalPages}
        initialPage={currentPage}
        onChange={onPageChange}
        showControls
        size="sm"
      />
    </div>
  );
};

export default Pagination;
