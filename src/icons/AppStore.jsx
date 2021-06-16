import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path d='M9.33,14.67l.74-1.33M11,11.66l1.67-3' />
    <path d='M8.67,13.33H12m1.93,0h1.4' />
    <path d='M14.67,14.67l-1.68-3M12,9.87l-.67-1.2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm-1.43,5.92.86-1.56-.53-.95a.5.5,0,1,1,.87-.49l.23.42.23-.42a.5.5,0,1,1,.87.49l-.64,1.16-.07.12,0,0-.92,1.67a.49.49,0,0,1-.44.26.53.53,0,0,1-.24-.06A.5.5,0,0,1,10.57,11.42ZM12,13.83H10.37l-.6,1.08a.51.51,0,0,1-.44.26.44.44,0,0,1-.24-.07.49.49,0,0,1-.19-.68l.33-.59H8.67a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H12a.5.5,0,0,1,.5.5A.5.5,0,0,1,12,13.83Zm3.33,0h-.56l.33.59a.49.49,0,0,1-.19.68.44.44,0,0,1-.24.07.51.51,0,0,1-.44-.26l-.76-1.38-.91-1.63a.5.5,0,0,1,.87-.49l.79,1.42h1.11a.5.5,0,0,1,.5.5A.5.5,0,0,1,15.33,13.83Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path d='M9.33,14.67l.74-1.33M11,11.66l1.67-3' />
    <path d='M8.67,13.33H12m1.93,0h1.4' />
    <path d='M14.67,14.67l-1.68-3M12,9.87l-.67-1.2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path d='M9.33,14.67l.74-1.33M11,11.66l1.67-3' />
    <path d='M8.67,13.33H12m1.93,0h1.4' />
    <path d='M14.67,14.67l-1.68-3M12,9.87l-.67-1.2' />
  </Fragment>
)

const AppStore = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AppStore
