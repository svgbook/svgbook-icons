import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,16.5V9.38A3.37,3.37,0,0,1,9.37,6h5.25A3.38,3.38,0,0,1,18,9.38v5.25A3.37,3.37,0,0,1,14.62,18H7.5A1.5,1.5,0,0,1,6,16.5Z'
    />
    <path
      fill='none'
      d='M9,12h2.62a1.5,1.5,0,0,1,0,3H9V9.75A.76.76,0,0,1,9.75,9h1.12a1.5,1.5,0,0,1,0,3H9.75'
    />
    <line x1='15' y1='15' x2='15.01' y2='15' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M14.62,5.5H9.37A3.88,3.88,0,0,0,5.5,9.38V16.5a2,2,0,0,0,2,2h7.12a3.88,3.88,0,0,0,3.88-3.87V9.38A3.88,3.88,0,0,0,14.62,5.5Zm-3,10H9a.5.5,0,0,1-.5-.5V9.75A1.25,1.25,0,0,1,9.75,8.5h1.12a2,2,0,0,1,2,2,2,2,0,0,1-.39,1.19,2,2,0,0,1-.86,3.81Zm3.39,0a.5.5,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,0,1Z'
    />
    <path
      stroke='none'
      d='M12.62,13.5a1,1,0,0,1-1,1H9.5v-2h2.12A1,1,0,0,1,12.62,13.5Z'
    />
    <path
      stroke='none'
      d='M11.87,10.5a1,1,0,0,1-1,1H9.5V9.75a.25.25,0,0,1,.25-.25h1.12A1,1,0,0,1,11.87,10.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6,16.5V9.38A3.37,3.37,0,0,1,9.37,6h5.25A3.38,3.38,0,0,1,18,9.38v5.25A3.37,3.37,0,0,1,14.62,18H7.5A1.5,1.5,0,0,1,6,16.5Z'
    />
    <path
      fill='none'
      d='M9,12h2.62a1.5,1.5,0,0,1,0,3H9V9.75A.76.76,0,0,1,9.75,9h1.12a1.5,1.5,0,0,1,0,3H9.75'
    />
    <line x1='15' y1='15' x2='15.01' y2='15' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M6,16.5V9.38A3.37,3.37,0,0,1,9.37,6h5.25A3.38,3.38,0,0,1,18,9.38v5.25A3.37,3.37,0,0,1,14.62,18H7.5A1.5,1.5,0,0,1,6,16.5Z'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9,12h2.62a1.5,1.5,0,0,1,0,3H9V9.75A.76.76,0,0,1,9.75,9h1.12a1.5,1.5,0,0,1,0,3H9.75'
    />
    <line stroke={secondaryColor} x1='15' y1='15' x2='15.01' y2='15' />
  </Fragment>
)

const Booking = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Booking
