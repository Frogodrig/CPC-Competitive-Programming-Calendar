import React from 'react';
import { modifyHost } from '../api/conversion';

function Filter(props) {


    //after click css for label
    const styling = {
        backgroundColor: "#04AA6D",
        color: "white"
    };

      
    //handling passing of platform names to local storage for later use
    function handleHosts(event) {
        var tempText = localStorage.getItem('hosts');
        var tempData = JSON.parse(tempText);
        if(event.target.checked) {
            if(!tempData.includes(event.target.name)) {
                var temp = event.target.name;
                tempData.push(temp);
            }
        } else {
            const index = tempData.indexOf(event.target.name);
            if(index > -1) {
                tempData.splice(index, 1);
            }
        }
        localStorage.setItem('hosts', JSON.stringify(tempData));
        modifyHost();
    }
  
   return (      
            <label className={'container btn'} style={props.state ? styling : null}>{props.platform}
                <input onClick={props.onClick} onChange={handleHosts} name={props.platform} value={props.state} type={"checkbox"} />
            </label>                   
   );

}

export default Filter;

