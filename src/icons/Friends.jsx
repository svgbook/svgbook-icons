import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8.53' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M7.26,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63H9.79a.63.63,0,0,1,.63.63v2.53l-.63.63V18'
    />
    <circle fill='none' cx='14.84' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M13.58,18V15.47H12.32l1.26-3.79a.63.63,0,0,1,.63-.63h1.26a.64.64,0,0,1,.64.63l1.26,3.79H16.11V18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='8.53' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M7.26,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63H9.79a.63.63,0,0,1,.63.63v2.53l-.63.63V18'
    />
    <circle cx='14.84' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M13.58,18V15.47H12.32l1.26-3.79a.63.63,0,0,1,.63-.63h1.26a.64.64,0,0,1,.64.63l1.26,3.79H16.11V18'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' strokeOpacity='.2' cx='8.53' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M7.26,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63H9.79a.63.63,0,0,1,.63.63v2.53l-.63.63V18'
    />
    <circle fill='none' strokeOpacity='.2' cx='14.84' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M13.58,18V15.47H12.32l1.26-3.79a.63.63,0,0,1,.63-.63h1.26a.64.64,0,0,1,.64.63l1.26,3.79H16.11V18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' stroke={secondaryColor} cx='8.53' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M7.26,18V14.84l-.63-.63V11.68a.63.63,0,0,1,.63-.63H9.79a.63.63,0,0,1,.63.63v2.53l-.63.63V18'
    />
    <circle fill='none' stroke={secondaryColor} cx='14.84' cy='7.26' r='1.26' />
    <path
      fill='none'
      d='M13.58,18V15.47H12.32l1.26-3.79a.63.63,0,0,1,.63-.63h1.26a.64.64,0,0,1,.64.63l1.26,3.79H16.11V18'
    />
  </Fragment>
)

const Friends = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Friends
