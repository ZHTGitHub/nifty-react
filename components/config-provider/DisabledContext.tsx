import * as React from 'react'

export type DisabledType = boolean | undefined

export interface DisabledContextProps {
  children?: React.ReactNode;
  disabled?: DisabledType;
}

const DisabledContext = React.createContext<DisabledType>(false)

export const DisabledContextProvider: React.FC<DisabledContextProps> = ({ children, disabled }) => {
  const originDisabled = React.useContext(DisabledContext)

  return <DisabledContext.Provider value={ disabled ?? originDisabled }>
    { children }
  </DisabledContext.Provider>
}

export default DisabledContext