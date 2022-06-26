import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <header>
      <h1>
        <CalendarTodayIcon fontSize="extra-large" />
        &nbsp;CP Calendar
        <a className={'header-links'} href={"https://github.com/Frogodrig"} target={"_blank"} rel={'noreferrer'}><GitHubIcon fontSize="large" /></a>
        <a className={'header-links'} href="https://www.linkedin.com/in/aditya-awasthi-5b76481b6/" target={"_blank"} rel={'noreferrer'}><LinkedInIcon fontSize="extra-large" /></a>
      </h1>
    </header>
  );
}

export default Header;
