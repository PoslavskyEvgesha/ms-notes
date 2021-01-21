import React, { createContext, ReactNode, useState, useEffect } from 'react'

type ContextProps = {
  storeType: string
  noteData: string
  handlerChangeStoreType: (vale: string) => void
  update: boolean
  setUpdate: (value: boolean) => void
}

export const StoreContext = createContext<Partial<ContextProps>>({})

interface IStoreProvider {
  children: ReactNode
}

export const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  const [storeType, setStoreType] = useState<string>(null)
  const [update, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    if (update) {
      setUpdate(false)
    }
  }, [update])

  useEffect(() => {
    const settingStore = localStorage.getItem('storeType')
    console.log(settingStore)
    if (settingStore) {
      setStoreType(settingStore)
    }
  }, [])

  const handlerChangeStoreType = (value: string) => {
    setStoreType(value)
    localStorage.setItem('storeType', value)
  }

  return (
    <StoreContext.Provider
      value={{ storeType, handlerChangeStoreType, update, setUpdate }}
    >
      {children}
    </StoreContext.Provider>
  )
}
