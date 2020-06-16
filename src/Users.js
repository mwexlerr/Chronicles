import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Users() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Users</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/usersFriends`}>
              Friends
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/usersBlocked`}>
              Blocked
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/usersAll`}>
              All
            </Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${match.path}/:userType`}>
            <UserType />
          </Route>
          <Route path={match.path}>
            <h4>Select users to view.</h4>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function UserType() {
    let { userType } = useParams();
    return (
      <h4>Requesting Users: {userType}</h4>
  
    );
  }