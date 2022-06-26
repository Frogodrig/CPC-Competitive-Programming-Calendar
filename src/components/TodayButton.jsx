import React from "react";

function TodayButton(props) {

    const styling = {
        background: '#a38a50cc',
        borderColor: '#fff'
    }

    return(
        <button className={"today-button btn btn-lg mx-3"} onClick={props.onClick} style={props.today ? styling : null}><span>TODAY</span></button>
    );
}

export default TodayButton;