import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M9.33,12a4.56,4.56,0,0,1,5,.35' />
    <path fill='none' d='M10,14c1-.67,2.67-.67,3.33.33' />
    <path fill='none' d='M8.67,10a6.83,6.83,0,0,1,6.66.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm1.61,9.25a.46.46,0,0,1-.28.08.47.47,0,0,1-.41-.22,2,2,0,0,0-2.64-.19.5.5,0,0,1-.56-.84c1.22-.8,3.19-.78,4,.48A.5.5,0,0,1,13.61,14.75Zm1.12-2.12a.48.48,0,0,1-.4.2.49.49,0,0,1-.3-.1,4.08,4.08,0,0,0-4.44-.32.51.51,0,0,1-.69-.17.51.51,0,0,1,.18-.69,5.1,5.1,0,0,1,5.55.38A.5.5,0,0,1,14.73,12.63Zm1-2a.51.51,0,0,1-.43.23.48.48,0,0,1-.26-.07,6.33,6.33,0,0,0-6.18-.31.5.5,0,0,1-.67-.23.51.51,0,0,1,.22-.67,7.32,7.32,0,0,1,7.16.36A.51.51,0,0,1,15.76,10.6Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M9.33,12a4.56,4.56,0,0,1,5,.35' />
    <path fill='none' d='M10,14c1-.67,2.67-.67,3.33.33' />
    <path fill='none' d='M8.67,10a6.83,6.83,0,0,1,6.66.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M9.33,12a4.56,4.56,0,0,1,5,.35' />
    <path fill='none' d='M10,14c1-.67,2.67-.67,3.33.33' />
    <path fill='none' d='M8.67,10a6.83,6.83,0,0,1,6.66.33' />
  </Fragment>
)

const Spotify = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Spotify
