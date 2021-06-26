import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,8.68H8A1.34,1.34,0,0,0,9.33,7.35.67.67,0,0,1,10,6.68h4a.66.66,0,0,1,.66.67A1.34,1.34,0,0,0,16,8.68h.67A1.33,1.33,0,0,1,18,10v6a1.32,1.32,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.34,1.34,0,0,1,7.33,8.68'
    />
    <path
      fill='none'
      d='M11.49,14.61a2,2,0,0,0,2.43-1.43,1.79,1.79,0,0,0,.07-.51m-1.5-1.93a2,2,0,0,0-2.43,1.43,2.23,2.23,0,0,0-.07.5'
    />
    <path fill='none' d='M13.32,12.67h1.33V14' />
    <path fill='none' d='M10.66,12.67H9.33V11.34' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.65,8.18H16a.83.83,0,0,1-.83-.83A1.17,1.17,0,0,0,14,6.18H10A1.17,1.17,0,0,0,8.83,7.35.83.83,0,0,1,8,8.18H7.33A1.83,1.83,0,0,0,5.5,10v6a1.83,1.83,0,0,0,1.83,1.83h9.32A1.83,1.83,0,0,0,18.48,16V10A1.83,1.83,0,0,0,16.65,8.18Zm-7.32,5a.5.5,0,0,1-.5-.5V11.34a.5.5,0,0,1,.5-.5.51.51,0,0,1,.5.5v.09a2.48,2.48,0,0,1,2.78-1.17.5.5,0,1,1-.25,1,1.5,1.5,0,0,0-1.77.95h.07a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5Zm5.82.84a.5.5,0,0,1-.5.5.51.51,0,0,1-.5-.5v-.08A2.5,2.5,0,0,1,12,15.17a2.27,2.27,0,0,1-.63-.08.5.5,0,0,1-.36-.61.51.51,0,0,1,.61-.36,1.47,1.47,0,0,0,1.79-.95h-.08a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5h1.33a.5.5,0,0,1,.5.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.33,8.68H8A1.34,1.34,0,0,0,9.33,7.35.67.67,0,0,1,10,6.68h4a.66.66,0,0,1,.66.67A1.34,1.34,0,0,0,16,8.68h.67A1.33,1.33,0,0,1,18,10v6a1.32,1.32,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.34,1.34,0,0,1,7.33,8.68'
    />
    <path
      fill='none'
      d='M11.49,14.61a2,2,0,0,0,2.43-1.43,1.79,1.79,0,0,0,.07-.51m-1.5-1.93a2,2,0,0,0-2.43,1.43,2.23,2.23,0,0,0-.07.5'
    />
    <path fill='none' d='M13.32,12.67h1.33V14' />
    <path fill='none' d='M10.66,12.67H9.33V11.34' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.33,8.68H8A1.34,1.34,0,0,0,9.33,7.35.67.67,0,0,1,10,6.68h4a.66.66,0,0,1,.66.67A1.34,1.34,0,0,0,16,8.68h.67A1.33,1.33,0,0,1,18,10v6a1.32,1.32,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.34,1.34,0,0,1,7.33,8.68'
    />
    <path
      fill='none'
      d='M11.49,14.61a2,2,0,0,0,2.43-1.43,1.79,1.79,0,0,0,.07-.51m-1.5-1.93a2,2,0,0,0-2.43,1.43,2.23,2.23,0,0,0-.07.5'
    />
    <path fill='none' d='M13.32,12.67h1.33V14' />
    <path fill='none' d='M10.66,12.67H9.33V11.34' />
  </Fragment>
)

const CameraRotate = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CameraRotate
