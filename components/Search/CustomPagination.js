import React from 'react';
import { usePagination } from 'react-instantsearch-hooks-web';
import styles from './CustomPagination.module.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

function CustomPagination(props) {
  const {
    pages,
    currentRefinement,
    nbHits,
    nbPages,
    isFirstPage,
    isLastPage,
    refine,
  } = usePagination(props);

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pageList}>
        {isFirstPage ? null : (
          <li className={styles.page}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={(event) => {
                event.preventDefault();
                refine(--currentRefinement);
              }}
            >
              <HiOutlineChevronLeft className={styles.pageChevron} />
            </a>
          </li>
        )}
        {pages.map((page) => {
          const pageStyle =
            page === currentRefinement ? styles.currentPage : styles.page;

          return (
            <li key={page} className={pageStyle}>
              <a
                href="#"
                className={styles.pageLink}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                }}
              >
                {page + 1}
              </a>
            </li>
          );
        })}
        {isLastPage ? null : (
          <li className={styles.page}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={(event) => {
                event.preventDefault();
                refine(++currentRefinement);
              }}
            >
              <HiOutlineChevronRight className={styles.pageChevron} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default CustomPagination;
