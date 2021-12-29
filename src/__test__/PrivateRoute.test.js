import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import AppRouter from '../Router';

import ManageCenter from '../Admin/ManageCenter/ManageCenter';

describe('PrivateRoute', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });




//  it('redirects to a localed path', () => {
//     let wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <Switch>
//           <Route exact path='/' render={() => (
//             <Redirect to={`/ManageCenter`} />
//           )} />
//           <Route path='/ManageCenter' component={Home} />
//           <Route render={() => "not found"} />
//         </Switch>
//       </MemoryRouter>
//     )
  
  
  
//     expect(wrapper.find(Home)).toHaveLength(1)
//   })

  it('should direct to app page to ManageCenter', () => {
    history.push('/ManageCenter');
    render(
      <Router history={history}>
<AppRouter/>
      </Router>,
    );
 
    expect(history.location.pathname).toBe('/ManageCenter');
    expect(history.location.pathname).not.toBe('/login');
  });
//     it('should direct to app page to ManageCenter', () => {
//     history.push('/ManageCenter2');
//     render(
//       <Router history={history}>
// <AppRouter/>
//       </Router>,
//     );
 
//     expect(history.location.pathname).toBe('/404');
//     expect(history.location.pathname).not.toBe('/ManageCenter2');
//   });
});