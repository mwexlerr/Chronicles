import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Profile() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Profile</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/wallets`}>
              Your Wallets
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/profile-stats`}>
              Your Statistics
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/profile-edit`}>
              Edit Profile
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/profile-delete`}>
              Delete Profile
            </Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${match.path}/:profileSelection`}>
            <MyProfile />
          </Route>
          <Route path={match.path}>
            <h4>This is your profile page. What would you like to do?</h4>
          </Route>
        </Switch>
      </div>
    );
  }

  function MyProfile() {
    let { profileSelection } = useParams();
    return (
      <h3>
        Requested Profile Page: {profileSelection}
      </h3>
    );
  }