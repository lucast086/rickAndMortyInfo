import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import Location from '../../../pages/Location';

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
let clear = () => {
	setPageNumber("")
	setGender("")
	setSpecies("")
	setStatus("")
	window.location.reload(false);
}

	return (
		<div className="col-lg-3 col-12 my-4">
			<div className="text-center fw-bold fs-4 marker">Filters</div>
			<div className="text-center fs-6 mb-3" style={{color: "blue", cursor: "pointer"}} onClick={clear}>Clear Filters</div>
			<div className="accordion" id="accordionExample">
				<Gender setGender={setGender} setPageNumber={setPageNumber} />
				<Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
				<Status setStatus={setStatus} setPageNumber={setPageNumber} />
			</div>
		</div>
	);
};

export default Filters;