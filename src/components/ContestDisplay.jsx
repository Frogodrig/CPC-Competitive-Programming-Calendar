import React from "react";
import Contest from "./Contest";


function ContestDisplay(props) {

    //If today button was clicked: true/false
    const todayState = props.today;

    //today's date and time
    var now = new Date();

    //Going 32 days back in time (A day more than a month if 1 month = 31 days)
    var todayStart = new Date();
    todayStart.setDate(todayStart.getDate() - 32);
    todayStart.setHours(0, 0, 0);

    //Going a day ahead from the present day 
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0);

    ///Refer to conversion.js
    var hostsToFilter;
    var hostsToFilterText = localStorage.getItem('hostsToFilter');
    hostsToFilter = JSON.parse(hostsToFilterText);

    //Start date and end date of the contest
    var contStart = new Date(props.start);
    var contEnd = new Date(props.end);

    //Conditional Rendering
    if(todayState) {
        //if fetched contest host is selected by the user, if the contest hasn't ended and is already started
        if (hostsToFilter.includes(props.resource) && contEnd > now && contStart < tomorrow) {
            let dur = '';
            let start = new Date(props.start);

            //To calculate the duration of the contest in minutes/hours/days (contest duration from API is in seconds)
            const minutes = (parseInt(props.duration) / 60) % 60;   //(Example: 90seconds/60 => 1.5%60 => 1.5)
            const hours = parseInt((parseInt(props.duration) / 3600) % 24);
            const days = parseInt((parseInt(props.duration) / 3600) / 24);
            if (days > 0) {
                dur += `${days} days `;
            }
            if (hours > 0) {
                dur += `${hours} hours `;
            }
            if (minutes > 0) {
                dur += `${minutes} minutes `;
            }
            start = start.toLocaleString('en-US'); //representing start time according to the user's region
            const time = start.split(', ');
            const date = time[0].split('/');

            return(<Contest key={props.index} href={props.href} resource={props.resource} event={props.event} date={date} time={time} duration={dur} />);
        }
    } else {
        if (hostsToFilter.includes(props.resource) && contStart > now) {
            let dur = '';
            let start = new Date(props.start);
            const minutes = (parseInt(props.duration) / 60) % 60;
            const hours = parseInt((parseInt(props.duration) / 3600) % 24);
            const days = parseInt((parseInt(props.duration) / 3600) / 24);
            if (days > 0) {
                dur += `${days} days `;
            }
            if (hours > 0) {
                dur += `${hours} hours `;
            }
            if (minutes > 0) {
                dur += `${minutes} minutes `;
            }
            start = start.toLocaleString('en-US');
            const time = start.split(', ');
            const date = time[0].split('/');

            return(<Contest key={props.index} href={props.href} resource={props.resource} event={props.event} date={date} time={time} duration={dur} />);
        }
    }

}

export default ContestDisplay;