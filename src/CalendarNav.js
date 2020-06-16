import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import CalApp from './AppCalendar';
/*import CalLog from './AppLogCalendar';*/

export default function Profile() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Calendar</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/calendar-log`}>
              Log
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/calendar-edit`}>
              Edit
            </Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${match.path}/:calendarSelection`}>
            <Cal />
          </Route>
          <Route path={match.path}>
            <h4>This is your dashboard Calendar. What would you like to do?</h4>
          </Route>
        </Switch>
      </div>
    );
  }

  function Cal() {
    let { CalendarSelection } = useParams();

    if (CalendarSelection === '') {
      return (
        <div><CalApp /></div>
      );
    } else {
      return (
        <div><CalApp /></div>
      );
    }
  }