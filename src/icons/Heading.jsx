import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.25,12h7.5' />
    <path fill='none' d='M8.25,6V18' />
    <path fill='none' d='M15.75,6V18' />
    <path fill='none' d='M14.25,18h3' />
    <path fill='none' d='M14.25,6h3' />
    <path fill='none' d='M6.75,18h3' />
    <path fill='none' d='M6.75,6h3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.25,12h7.5' />
    <path fill='none' d='M8.25,6V18' />
    <path fill='none' d='M15.75,6V18' />
    <path fill='none' d='M14.25,18h3' />
    <path fill='none' d='M14.25,6h3' />
    <path fill='none' d='M6.75,18h3' />
    <path fill='none' d='M6.75,6h3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M8.25,12h7.5' />
    <path fill='none' strokeOpacity='.2' d='M8.25,6V18' />
    <path fill='none' strokeOpacity='.2' d='M15.75,6V18' />
    <path fill='none' d='M14.25,18h3' />
    <path fill='none' d='M14.25,6h3' />
    <path fill='none' d='M6.75,18h3' />
    <path fill='none' d='M6.75,6h3' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M8.25,12h7.5' />
    <path fill='none' d='M8.25,6V18' />
    <path fill='none' d='M15.75,6V18' />
    <path fill='none' stroke={secondaryColor} d='M14.25,18h3' />
    <path fill='none' stroke={secondaryColor} d='M14.25,6h3' />
    <path fill='none' stroke={secondaryColor} d='M6.75,18h3' />
    <path fill='none' stroke={secondaryColor} d='M6.75,6h3' />
  </Fragment>
)

const Heading = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Heading
