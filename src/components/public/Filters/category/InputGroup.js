import React from "react";

const InputGroup = ({total, name, setId}) => {
	return (
		<div className="input-group">
			<select 
            onChange={
                e=> setId(e.target.value)
                }
            className="form-select" id={name}>
                {[...Array(total).keys()].map( (x) => {
                        return <option key={x} value={x+1}>{name} - {x+1}</option>
                    }
                )}
			</select>
		</div>
	);
};

export default InputGroup;
