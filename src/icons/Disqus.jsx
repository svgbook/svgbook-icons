import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12.23,18a6,6,0,0,1-3.94-1.33H5.67l1.14-2.18A5.76,5.76,0,0,1,6.3,12a5.91,5.91,0,0,1,5.93-6,6,6,0,1,1,0,12Z'
    />
    <path
      fill='none'
      d='M12,14H11V10h1c1.41,0,2.34.55,2.34,2v0C14.33,13.46,13.4,14,12,14Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12.23,5.5A6.39,6.39,0,0,0,5.8,12a6.51,6.51,0,0,0,.45,2.47l-1,2a.52.52,0,0,0,0,.5.5.5,0,0,0,.43.24H8.11a6.58,6.58,0,0,0,4.12,1.33,6.56,6.56,0,0,0,6.6-6.5A6.56,6.56,0,0,0,12.23,5.5Zm-.24,9H11a.5.5,0,0,1-.5-.5V10a.5.5,0,0,1,.5-.5h1c2.47,0,2.84,1.56,2.84,2.49S14.46,14.5,12,14.5Z'
    />
    <path
      stroke='none'
      d='M13.83,12c0,.74-.22,1.49-1.84,1.49H11.5v-3H12C13.62,10.5,13.83,11.29,13.83,12Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12.23,18a6,6,0,0,1-3.94-1.33H5.67l1.14-2.18A5.76,5.76,0,0,1,6.3,12a5.91,5.91,0,0,1,5.93-6,6,6,0,1,1,0,12Z'
    />
    <path
      fill='none'
      d='M12,14H11V10h1c1.41,0,2.34.55,2.34,2v0C14.33,13.46,13.4,14,12,14Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12.23,18a6,6,0,0,1-3.94-1.33H5.67l1.14-2.18A5.76,5.76,0,0,1,6.3,12a5.91,5.91,0,0,1,5.93-6,6,6,0,1,1,0,12Z'
    />
    <path
      fill='none'
      d='M12,14H11V10h1c1.41,0,2.34.55,2.34,2v0C14.33,13.46,13.4,14,12,14Z'
    />
  </Fragment>
)

const Disqus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Disqus
