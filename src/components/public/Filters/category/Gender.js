import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({ setGender, setPageNumber }) => {
    let genders = ["Male","Female","Unknown", "Genderless"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
        <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
        >
            Gender
        </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        {genders.map((items, index) => (
                <FilterBtn key={index} 
                    name="gender" 
                    index={index} 
                    items={items}  
                    setParam = {setGender}
                    setPageNumber={setPageNumber}/>
            ))}
        </div>
    </div>
</div>
  )
}

export default Gender