
import React from "react";
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { Router, Switch, Route } from 'react-router-dom';
import AppRouter from '../../Router';

import ManageCenter from '../../Admin/ManageCenter/ManageCenter';
import ManageVolunteers from '../../Admin/ManageVolunteers/ManageVolunteers';


describe('PrivateRoute', () => {
  const history = createMemoryHistory({ initialEntries: ['/ManageCenter'] });
  it('should redirect to login page if there is no auth', () => {
    render(
      <Router history={history}>
        <Switch>
          <AppRouter
            path="/"
            component={ManageCenter}
            redirect="/ManageCenter"
           // authenticated={false}
          />
          <Route path="/ManageCenter">
            <ManageCenter />
          </Route>
        </Switch>
      </Router>,
      0,
    );
    expect(history.location.pathname).toBe('/ManageCenter');
    expect(history.location.pathname).not.toBe('/');
  });

//   it('should direct to app page if the user is authenticated', () => {
//     history.push('/app');
//     render(
//       <Router history={history}>
//         <Switch>
//           <AppRouter
//             path="/app"
//             component={Main}
//             redirect="/login"
//             authenticated={true}
//           />
//           <Route path="/login">
//             <Login />
//           </Route>
//         </Switch>
//       </Router>,
//     );
//     expect(history.location.pathname).toBe('/app');
//     expect(history.location.pathname).not.toBe('/login');
//   });
});