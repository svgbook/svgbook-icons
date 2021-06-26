import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2' />
    <path fill='none' d='M8,6a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2' />
    <path
      fill='none'
      d='M12.67,8.67h4.66a.67.67,0,0,1,.67.66v5.34a.67.67,0,0,1-.67.66H12.67'
    />
    <path
      fill='none'
      d='M7.33,8.67H6.67A.67.67,0,0,0,6,9.33v5.34a.67.67,0,0,0,.67.66h.66'
    />
    <path fill='none' d='M15.33,12h0' />
    <path fill='none' d='M12.67,12h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2' />
    <path fill='none' d='M8,6a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2' />
    <path
      fill='none'
      d='M12.67,8.67h4.66a.67.67,0,0,1,.67.66v5.34a.67.67,0,0,1-.67.66H12.67'
    />
    <path
      fill='none'
      d='M7.33,8.67H6.67A.67.67,0,0,0,6,9.33v5.34a.67.67,0,0,0,.67.66h.66'
    />
    <path fill='none' d='M15.33,12h0' />
    <path fill='none' d='M12.67,12h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2' />
    <path fill='none' d='M8,6a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M12.67,8.67h4.66a.67.67,0,0,1,.67.66v5.34a.67.67,0,0,1-.67.66H12.67'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M7.33,8.67H6.67A.67.67,0,0,0,6,9.33v5.34a.67.67,0,0,0,.67.66h.66'
    />
    <path fill='none' strokeOpacity='.2' d='M15.33,12h0' />
    <path fill='none' strokeOpacity='.2' d='M12.67,12h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M12,6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2' />
    <path fill='none' d='M8,6a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12.67,8.67h4.66a.67.67,0,0,1,.67.66v5.34a.67.67,0,0,1-.67.66H12.67'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M7.33,8.67H6.67A.67.67,0,0,0,6,9.33v5.34a.67.67,0,0,0,.67.66h.66'
    />
    <path fill='none' stroke={secondaryColor} d='M15.33,12h0' />
    <path fill='none' stroke={secondaryColor} d='M12.67,12h0' />
  </Fragment>
)

const Forms = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Forms
