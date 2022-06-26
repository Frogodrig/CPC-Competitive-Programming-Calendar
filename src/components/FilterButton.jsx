import React from "react";

function FilterButton(props) {

    const styling = {
        background: '#a38a50cc',
        borderColor: '#fff'
    }

    return(
        <button className={"filter-button btn btn-lg mx-3 my-3"} onClick={props.onClick} style={props.state ? styling : null}><span>FILTER </span></button>
    );
}

export default FilterButton;