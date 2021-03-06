import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage'
import Orphanage from './pages/Orphanage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanage/:id" component={Orphanage} />
        <Route path="/orpha/create" component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  )
}
