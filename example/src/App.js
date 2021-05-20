import React from 'react'

import { Icons, IconProvider } from 'svgbook-icons'

const App = () => {
  return (
    <IconProvider
      value={{
        design: 'color',
        size: 200,
        color: '#c62fad',
        secondaryColor: '#c62f2f',
        strokeWidth: 1
      }}
    >
      <Icons.Copy />
    </IconProvider>
  )
}

export default App
