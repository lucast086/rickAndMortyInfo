import React, { useState } from "react";
import style from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
	const [searchValue, setSearchValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setSearch(searchValue);
		setPageNumber(1);
	};

	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 my-5" role="search" onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				className={`${style.search} form-control me-2`}
				type="search"
				placeholder="Search for character"
				aria-label="Search"
			/>
			<button className={`${style.boton} btn btn-outline-success`} type="submit">
				Search
			</button>
		</form>
	);
};
export default Search;
