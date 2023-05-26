import React from "react";
import FilterBtn from "../FilterBtn";

const Species = ({ setSpecies, setPageNumber }) => {
	let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];

	return (
		<div className="accordion-item">
			<h2 className="accordion-header">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo"
				>
					Species
				</button>
			</h2>
			<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					{species.map((items, index) => (
						<FilterBtn 
                            key={index} 
                            name="species" 
                            index={index} 
                            items={items} 
                            setParam = {setSpecies}
                            setPageNumber={setPageNumber} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Species;
