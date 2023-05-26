import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pages, setPageNumber, pageNumber }) => {
	return (
		<ReactPaginate
			pageCount={pages}
			nextLabel="Next"
			previousLabel="Prev"
			pageClassName="page-item"
			pageLinkClassName="page-link "
			breakClassName="page-item"
			breakLinkClassName="page-link "
			containerClassName="pagination marker gap-2 justify-content-center my-4"
			activeClassName="active"
			nextClassName="page-item mx-4"
			previousClassName="page-item mx-4"
			previousLinkClassName="page-link"
			nextLinkClassName="page-link"
			onPageChange={(data) => {
				setPageNumber(parseInt(data.selected) + 1);
			}}
			forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
		/>
	);
};

export default Pagination;
