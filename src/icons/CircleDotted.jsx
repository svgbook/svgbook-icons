import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line fill='none' x1='9' y1='6.81' x2='9' y2='6.81' />
    <line fill='none' x1='6.81' y1='9' x2='6.81' y2='9.01' />
    <line fill='none' x1='6' y1='12' x2='6' y2='12.01' />
    <line fill='none' x1='6.81' y1='15' x2='6.81' y2='15' />
    <line fill='none' x1='9' y1='17.19' x2='9' y2='17.2' />
    <line fill='none' x1='12' y1='18' x2='12' y2='18' />
    <line fill='none' x1='15' y1='17.19' x2='15' y2='17.2' />
    <line fill='none' x1='17.19' y1='15' x2='17.19' y2='15' />
    <line fill='none' x1='18' y1='12' x2='18' y2='12.01' />
    <line fill='none' x1='17.19' y1='9' x2='17.19' y2='9.01' />
    <line fill='none' x1='15' y1='6.81' x2='15' y2='6.81' />
    <line fill='none' x1='12' y1='6' x2='12' y2='6.01' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line fill='none' x1='9' y1='6.81' x2='9' y2='6.81' />
    <line fill='none' x1='6.81' y1='9' x2='6.81' y2='9.01' />
    <line fill='none' x1='6' y1='12' x2='6' y2='12.01' />
    <line fill='none' x1='6.81' y1='15' x2='6.81' y2='15' />
    <line fill='none' x1='9' y1='17.19' x2='9' y2='17.2' />
    <line fill='none' x1='12' y1='18' x2='12' y2='18' />
    <line fill='none' x1='15' y1='17.19' x2='15' y2='17.2' />
    <line fill='none' x1='17.19' y1='15' x2='17.19' y2='15' />
    <line fill='none' x1='18' y1='12' x2='18' y2='12.01' />
    <line fill='none' x1='17.19' y1='9' x2='17.19' y2='9.01' />
    <line fill='none' x1='15' y1='6.81' x2='15' y2='6.81' />
    <line fill='none' x1='12' y1='6' x2='12' y2='6.01' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line fill='none' x1='9' y1='6.81' x2='9' y2='6.81' />
    <line fill='none' x1='6.81' y1='9' x2='6.81' y2='9.01' />
    <line fill='none' x1='6' y1='12' x2='6' y2='12.01' />
    <line fill='none' x1='6.81' y1='15' x2='6.81' y2='15' />
    <line fill='none' x1='9' y1='17.19' x2='9' y2='17.2' />
    <line fill='none' x1='12' y1='18' x2='12' y2='18' />
    <line fill='none' x1='15' y1='17.19' x2='15' y2='17.2' />
    <line fill='none' x1='17.19' y1='15' x2='17.19' y2='15' />
    <line fill='none' x1='18' y1='12' x2='18' y2='12.01' />
    <line fill='none' x1='17.19' y1='9' x2='17.19' y2='9.01' />
    <line fill='none' x1='15' y1='6.81' x2='15' y2='6.81' />
    <line fill='none' x1='12' y1='6' x2='12' y2='6.01' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line fill='none' x1='9' y1='6.81' x2='9' y2='6.81' />
    <line fill='none' x1='6.81' y1='9' x2='6.81' y2='9.01' />
    <line fill='none' x1='6' y1='12' x2='6' y2='12.01' />
    <line fill='none' x1='6.81' y1='15' x2='6.81' y2='15' />
    <line fill='none' x1='9' y1='17.19' x2='9' y2='17.2' />
    <line fill='none' x1='12' y1='18' x2='12' y2='18' />
    <line fill='none' x1='15' y1='17.19' x2='15' y2='17.2' />
    <line fill='none' x1='17.19' y1='15' x2='17.19' y2='15' />
    <line fill='none' x1='18' y1='12' x2='18' y2='12.01' />
    <line fill='none' x1='17.19' y1='9' x2='17.19' y2='9.01' />
    <line fill='none' x1='15' y1='6.81' x2='15' y2='6.81' />
    <line fill='none' x1='12' y1='6' x2='12' y2='6.01' />
  </Fragment>
)

const CircleDotted = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleDotted
