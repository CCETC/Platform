import React from 'react'
import { Route, IndexRoute } from 'react-router'
import UsersIndex from './views/users/index'
import UsersShow from './views/users/show'
import UsersNew from './views/users/new'
import UsersEdit from './views/users/edit'

const routes = (
  <Route>
    <Route path="users">
      <IndexRoute component={UsersIndex} />
      <Route path=":id" component={UsersShow} />
      <Route path="new" component={UsersNew} />
      <Route path=":id/edit" component={UsersEdit} />
    </Route>
  </Route>
)

export default routes
