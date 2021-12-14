import React from 'react';

const DropDown3Dot = () => {
    return (
        <>
            <div class="btn-group dropstart ">
                <button type="button" className="btn fw-bolder fs-5 pb-1 " data-bs-toggle="dropdown" aria-expanded="false">
                    ...
                </button>
                <ul class="dropdown-menu w-25">
                    <li className=' ms-5'>Edit</li>
                    <li className=' ms-5'>Report</li>
                    <li className=' ms-5'>Option 3</li>
                </ul>
            </div>
        </>
    );
};

export default DropDown3Dot;