import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Local
import { Main } from 'src/pages/Main'
import { EditNote } from 'src/pages/EditNote'
import { CreateNote } from 'src/pages/CreateNote'
import { ViewNote } from 'src/pages/ViewNote'
import { Settings } from 'src/pages/Settings'

export const renderRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact={true} component={Main} />
    <Route path="/edit/:id" component={EditNote} />
    <Route path="/create" component={CreateNote} />
    <Route path="/view/:id" component={ViewNote} />
    <Route path="/settings" component={Settings} />
  </Switch>
)
