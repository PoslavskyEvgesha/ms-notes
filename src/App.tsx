import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// Local
import { StoreProvider } from './store'
import { Header } from 'src/components'
import { renderRoutes } from './routes'

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <div className="body-wrapper">
          <Header />
          <div className="route-wrapper">
            <div className="container">{renderRoutes()}</div>
          </div>
        </div>
      </Router>
    </StoreProvider>
  )
}

export default App
