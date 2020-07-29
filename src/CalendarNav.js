import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import CalApp from './AppCalendar';
import CalLog from './AppLogCalendar';

//export default class CalNav extends Component {
export default function CalNav() 
  // handlePress(event, picker) {
  //   console.log("You pressed the buttooooooon!!!")
  // }
  
  //render() {
  {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Calendar</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/calendar-log`}>
              {/* <button
                onPress={this.handlePress}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button">
                Log
              </button> */}
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
    let { calendarSelection } = useParams();

    console.log(useParams());

    console.log(calendarSelection);

    if (calendarSelection === 'calendar-edit') {
      return (
        <div>
          <CalApp />
        </div>
      );
    }
    else {
      return (
        <div>
          <CalLog />
        </div>
      );
    }
  }