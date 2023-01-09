import React, {useState} from 'react';

function Dropdown (props) {

    const [anim, setAnim] = useState(false);

    const classToggle = () => {
        setAnim(!anim)
    }
    return (
        <div className='dropdown-global'>
            <div className='dropdown'>
                <button onClick={classToggle} className='dropdown-about'>{props.name}
                    <span className={`fas fa-chevron-down ${anim? "fas fa-chevron-up" : "fas fa-chevron-down"}`}></span> 
                </button>
                <div className={`dropdown-text ${anim ? "dropdown-text-open" : ""}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;