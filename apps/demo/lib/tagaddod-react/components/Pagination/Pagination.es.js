import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { useState, useEffect, useMemo } from "react";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Pagination.module.css.es.js";
import { Button } from "../Button/Button.es.js";
import IconChevronLeft from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.es.js";
import IconChevronRight from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.es.js";
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
const Pagination = ({
  total,
  current = 1,
  pageSize = 10,
  onChange,
  onPageSizeChange,
  showCount = true,
  showRowsInPage = true,
  countType = "long",
  className,
  pageSizeOptions = [10, 20, 50, 100]
}) => {
  const [currentPage, setCurrentPage] = useState(current);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);
  useEffect(() => {
    setCurrentPage(current);
  }, [current]);
  useEffect(() => {
    setCurrentPageSize(pageSize);
  }, [pageSize]);
  const { paginationRange, totalPages } = usePagination({
    total,
    current: currentPage,
    pageSize: currentPageSize,
    siblingCount: countType === "long" ? 1 : 0
    // No siblings in short mode
  });
  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    onChange == null ? void 0 : onChange(page, currentPageSize);
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  const handlePageSizeChange = (e) => {
    const newPageSize = Number(e.target.value);
    setCurrentPageSize(newPageSize);
    setCurrentPage(1);
    onChange == null ? void 0 : onChange(1, newPageSize);
    onPageSizeChange == null ? void 0 : onPageSizeChange(newPageSize);
  };
  const countText = useMemo(() => {
    const start = total === 0 ? 0 : (currentPage - 1) * currentPageSize + 1;
    const end = Math.min(currentPage * currentPageSize, total);
    return `Showing ${start} to ${end} of ${total} entries`;
  }, [currentPage, currentPageSize, total]);
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const renderEllipsis = (key) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.ellipsis, "aria-hidden": "true", children: "•••" }, key);
  if (total === 0 || totalPages <= 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx(styles.pagination, className), children: [
    showCount && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.count, style: lineHeightStyle, children: isRTL ? (
      // Arabic format
      `عرض ${(currentPage - 1) * currentPageSize + 1} إلى ${Math.min(currentPage * currentPageSize, total)} من أصل ${total}`
    ) : (
      // English format
      countText
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.controlsGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.paginationItems, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "micro",
            variant: "secondary",
            tone: "neutral",
            onClick: handlePrev,
            disabled: currentPage === 1,
            "aria-label": "Previous page",
            prefixIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronLeft, { size: 16 })
          }
        ),
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return renderEllipsis(`ellipsis-${index}`);
          }
          const page = pageNumber;
          const isCurrentPage = page === currentPage;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "micro",
              variant: isCurrentPage ? "primary" : "secondary",
              tone: isCurrentPage ? "default" : "neutral",
              onClick: () => handlePageChange(page),
              "aria-current": isCurrentPage ? "page" : void 0,
              children: page
            },
            `page-${page}`
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "micro",
            variant: "secondary",
            tone: "neutral",
            onClick: handleNext,
            disabled: currentPage === totalPages,
            "aria-label": "Next page",
            suffixIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { size: 16 })
          }
        )
      ] }),
      showRowsInPage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.rowsPerPage, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.rowsLabel, style: lineHeightStyle, children: isRTL ? "عدد الصفوف" : "Rows in Page" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.selectWrapper, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              className: styles.select,
              value: currentPageSize,
              onChange: handlePageSizeChange,
              "aria-label": isRTL ? "عدد الصفوف" : "Rows in Page",
              children: pageSizeOptions.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: size, className: styles.selectValue, style: lineHeightStyle, children: size }, size))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.selectArrow, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9L12 15L18 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  DOTS,
  Pagination,
  usePagination
};
//# sourceMappingURL=Pagination.es.js.map
