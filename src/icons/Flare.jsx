import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='1.33' />
    <path
      fill='none'
      d='M6,12H8.67M12,6V8.67M15.33,12H18m-6,3.33V18M9,9l.67.67M15,9l-.67.67m0,4.66L15,15m-5.33-.67L9,15'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12' r='1.33' />
    <path
      fill='none'
      d='M6,12H8.67M12,6V8.67M15.33,12H18m-6,3.33V18M9,9l.67.67M15,9l-.67.67m0,4.66L15,15m-5.33-.67L9,15'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' strokeOpacity='.2' cx='12' cy='12' r='1.33' />
    <path
      fill='none'
      d='M6,12H8.67M12,6V8.67M15.33,12H18m-6,3.33V18M9,9l.67.67M15,9l-.67.67m0,4.66L15,15m-5.33-.67L9,15'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='1.33' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,12H8.67M12,6V8.67M15.33,12H18m-6,3.33V18M9,9l.67.67M15,9l-.67.67m0,4.66L15,15m-5.33-.67L9,15'
    />
  </Fragment>
)

const Flare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Flare
