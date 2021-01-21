import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// Local
import { Button } from 'src/components'
import { useStore } from 'src/store'

export const Header: React.FC = () => {
  const history = useHistory()
  const { storeType } = useStore()

  const buttonsStyle = {
    fontSize: 14,
    paddingVertical: 6,
  }

  const _handlerCreate = () => {
    history.push('/create')
  }

  const _handlerSettings = () => {
    history.push('/settings')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col header-col">
            <div className="header-left">
              <div className="header-link">
                <Link to="/" className="app-name">
                  Notes App
                </Link>
                <div className="header-link-sub">
                  {storeType === 'firebase' ? 'Firebase' : 'Local storage'}
                </div>
              </div>
            </div>
            <div className="header-right">
              <Button
                label="Create Note"
                style={buttonsStyle}
                onClick={_handlerCreate}
              />
              <Button
                label="Settings"
                style={buttonsStyle}
                type="bordered"
                onClick={_handlerSettings}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
