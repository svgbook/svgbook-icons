import React from 'react'

import { Icons, IconProvider } from 'svgbook-icons'

const App = () => {
  return (
    <IconProvider
      value={{
        design: 'fill',
        size: 200,
        color: '#D44353',
        strokeWidth: 0
      }}
    >
      <Icons.Activity />
    </IconProvider>
  )
}

export default App
