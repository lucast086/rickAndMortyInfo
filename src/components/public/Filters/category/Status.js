import React from 'react'
import FilterBtn from '../FilterBtn'

const Status = ({ setStatus, setPageNumber }) => {
let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
        >
            Status
        </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            {status.map((items, index) => (
                <FilterBtn                   
                    key={index} 
                    name="status" 
                    index={index} 
                    items={items} 
                    setParam = {setStatus}
                    setPageNumber={setPageNumber} />
            ))}
        </div>
    </div>
</div>
  )
}

export default Status