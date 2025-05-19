import { useMemo } from "react";
const DOTS = "...";
const usePagination = ({
  total,
  current,
  pageSize = 10,
  siblingCount = 1
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };
  const paginationRange = useMemo(() => {
    const currentPage = Math.max(1, Math.min(current, totalPages));
    const totalPageItems = siblingCount * 2 + 5;
    if (totalPages <= totalPageItems) {
      return range(1, totalPages);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
    return range(1, totalPages);
  }, [total, current, pageSize, siblingCount]);
  return {
    paginationRange,
    totalPages,
    currentPage: current
  };
};
export {
  DOTS,
  usePagination
};
//# sourceMappingURL=usePagination.es.js.map
