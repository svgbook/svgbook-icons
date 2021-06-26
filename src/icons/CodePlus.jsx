import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M10,12h4' />
    <path d='M12,10v4' />
    <path
      fill='none'
      d='M8,16.67a1.33,1.33,0,0,1-1.33-1.34V12.67L6,12l.67-.67V8.67A1.33,1.33,0,0,1,8,7.33'
    />
    <path
      fill='none'
      d='M16,16.67a1.33,1.33,0,0,0,1.33-1.34V12.67L18,12l-.67-.67V8.67A1.33,1.33,0,0,0,16,7.33'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10,12h4' />
    <path d='M12,10v4' />
    <path
      fill='none'
      d='M8,16.67a1.33,1.33,0,0,1-1.33-1.34V12.67L6,12l.67-.67V8.67A1.33,1.33,0,0,1,8,7.33'
    />
    <path
      fill='none'
      d='M16,16.67a1.33,1.33,0,0,0,1.33-1.34V12.67L18,12l-.67-.67V8.67A1.33,1.33,0,0,0,16,7.33'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M10,12h4' />
    <path strokeOpacity='.2' d='M12,10v4' />
    <path
      fill='none'
      d='M8,16.67a1.33,1.33,0,0,1-1.33-1.34V12.67L6,12l.67-.67V8.67A1.33,1.33,0,0,1,8,7.33'
    />
    <path
      fill='none'
      d='M16,16.67a1.33,1.33,0,0,0,1.33-1.34V12.67L18,12l-.67-.67V8.67A1.33,1.33,0,0,0,16,7.33'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M10,12h4' />
    <path stroke={secondaryColor} d='M12,10v4' />
    <path
      fill='none'
      d='M8,16.67a1.33,1.33,0,0,1-1.33-1.34V12.67L6,12l.67-.67V8.67A1.33,1.33,0,0,1,8,7.33'
    />
    <path
      fill='none'
      d='M16,16.67a1.33,1.33,0,0,0,1.33-1.34V12.67L18,12l-.67-.67V8.67A1.33,1.33,0,0,0,16,7.33'
    />
  </Fragment>
)

const CodePlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CodePlus
