import * as React from 'react'

export type SizeType = 'small' | 'middle' | 'large' | undefined

const SizeContext = React.createContext<SizeType>(undefined)

export interface SizeContextProps {
  children?: React.ReactNode;
  size?: SizeType;
}

export const SizeContextProvider: React.FC<SizeContextProps> = ({ children, size }) => {
  const originSize = React.useContext<SizeType>(SizeContext)

  return <SizeContext.Provider value={ size || originSize }>
    { children }
  </SizeContext.Provider>
}

export default SizeContext