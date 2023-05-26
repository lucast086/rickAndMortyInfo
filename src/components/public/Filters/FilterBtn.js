import React from "react";

const FilterBtn = ({ name, index, items, setParam, setPageNumber }) => {
	return (
		<div className="form-check">
			<input className="btn-check" type="radio" name={name} id={`${name}-${index}`}
          onClick={ () => {
              setPageNumber(1);
              setParam(items);
            }
          }
      />
			<label className="btn btn-outline-success" for={`${name}-${index}`}>
        {items}
			</label>
		</div>
	);
};

export default FilterBtn;
