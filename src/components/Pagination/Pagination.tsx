import React from "react";
import styles from "./Pagination.module.scss";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface PaginationProps {
  page: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, onPageChange }) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChange(page - 1);
      scrollToTop();
    }
  };

  const handleNextPage = () => {
    onPageChange(page + 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination__change}
        onClick={handlePreviousPage}
        disabled={page === 1}
      >
        <MdOutlineArrowBackIos size={50} />
      </button>
      <div className={styles.pagination__page}>{page}</div>
      <button className={styles.pagination__change} onClick={handleNextPage}>
        <MdOutlineArrowForwardIos size={50} />
      </button>
    </div>
  );
};

export default Pagination;
