import React from 'react'
// Local
import { useStore } from 'src/store'

export const Settings: React.FC = () => {
  const { storeType, handlerChangeStoreType } = useStore()

  const _handlerSelectStore = (value: string) => {
    if (value !== storeType) {
      handlerChangeStoreType(value)
    }
  }

  const _styleActiveSelector = (value: string) => {
    if (value === storeType) {
      return 'active'
    } else {
      return ''
    }
  }

  return (
    <div className="row">
      <div className="col">
        <div className="setting-title">User store settings:</div>
        <div className="setting-select-wrapper">
          <div
            className={`setting-select ${_styleActiveSelector('firebase')}`}
            onClick={() => _handlerSelectStore('firebase')}
          >
            <div className="setting-select-radio" />
            <div className="setting-select-label">Firebase</div>
          </div>
          <div
            className={`setting-select ${_styleActiveSelector('local')}`}
            onClick={() => _handlerSelectStore('local')}
          >
            <div className="setting-select-radio" />
            <div className="setting-select-label">Local storage</div>
          </div>
        </div>
      </div>
    </div>
  )
}
