import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,11.58a6,6,0,1,0-1.06,3.85' />
    <path
      fill='none'
      d='M18,11.58c.14,2-3.36,1.61-4.61,1,.93-1.06.27-2.69-1.52-2.56A1.82,1.82,0,0,0,10,12.14c.18,2.66,3,4.14,6.91,3.2'
    />
    <path fill='none' d='M6,12.42c-.18-2.7,5.82-4.82,7.51-1.79' />
    <path fill='none' d='M12.42,18c-2,.14-3.44-3.15-2.38-6.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,11.58a6,6,0,1,0-1.06,3.85' />
    <path
      fill='none'
      d='M18,11.58c.14,2-3.36,1.61-4.61,1,.93-1.06.27-2.69-1.52-2.56A1.82,1.82,0,0,0,10,12.14c.18,2.66,3,4.14,6.91,3.2'
    />
    <path fill='none' d='M6,12.42c-.18-2.7,5.82-4.82,7.51-1.79' />
    <path fill='none' d='M12.42,18c-2,.14-3.44-3.15-2.38-6.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.92,15.34c-4,.94-6.73-.54-6.91-3.2A1.82,1.82,0,0,1,11.86,10c1.79-.13,2.45,1.5,1.52,2.56,1.25.62,4.75,1,4.61-1a6,6,0,1,0-1.06,3.85Z'
    />
    <path fill='none' d='M6,12.42c-.18-2.7,5.82-4.82,7.51-1.79' />
    <path fill='none' d='M12.42,18c-2,.14-3.44-3.15-2.38-6.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.92,15.34c-4,.94-6.73-.54-6.91-3.2A1.82,1.82,0,0,1,11.86,10c1.79-.13,2.45,1.5,1.52,2.56,1.25.62,4.75,1,4.61-1a6,6,0,1,0-1.06,3.85Z'
    />
    <path fill='none' d='M18,11.58a6,6,0,1,0-1.06,3.85' />
    <path
      fill='none'
      d='M18,11.58c.14,2-3.36,1.61-4.61,1,.93-1.06.27-2.69-1.52-2.56A1.82,1.82,0,0,0,10,12.14c.18,2.66,3,4.14,6.91,3.2'
    />
    <path fill='none' d='M6,12.42c-.18-2.7,5.82-4.82,7.51-1.79' />
    <path fill='none' d='M12.42,18c-2,.14-3.44-3.15-2.38-6.5' />
  </Fragment>
)

const Edge = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Edge
