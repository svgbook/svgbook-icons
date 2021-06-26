import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,18h.66a.67.67,0,0,0,.67-.67v-.66h0a2,2,0,1,1,4,0M16,18h.67a.66.66,0,0,0,.66-.67v-10L15.33,6l-2,1.33v4H10.67v-4L8.67,6l-2,1.33v10a.67.67,0,0,0,.66.67H8.67M14,16.67v.66a.67.67,0,0,0,.67.67H16'
    />
    <path fill='none' d='M8.68,8.67h0' />
    <path fill='none' d='M8.67,10.67h0' />
    <path fill='none' d='M8.67,12.67h0' />
    <path fill='none' d='M15.33,8.67h0' />
    <path fill='none' d='M15.33,10.66h0' />
    <path fill='none' d='M15.33,12.66h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.61,6.92l-2-1.34a.5.5,0,0,0-.55,0l-2,1.34a.5.5,0,0,0-.23.41v3.5H11.17V7.33a.5.5,0,0,0-.23-.41l-2-1.34a.5.5,0,0,0-.55,0l-2,1.34a.49.49,0,0,0-.22.41v10A1.16,1.16,0,0,0,7.33,18.5h2a1.17,1.17,0,0,0,1.17-1.17v-.66a1.5,1.5,0,1,1,3,0v.66a1.17,1.17,0,0,0,1.17,1.17h2a1.16,1.16,0,0,0,1.16-1.17v-10A.49.49,0,0,0,17.61,6.92ZM8.67,13.17a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Zm0-2a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Zm0-2a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Zm7.15,3.5a.5.5,0,0,1-.5.5.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5Zm0-2a.5.5,0,0,1-.5.5.5.5,0,0,1,0-1,.49.49,0,0,1,.5.49Zm-.5-1.5a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5.5.5,0,0,1,0,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M8.67,18h.66a.67.67,0,0,0,.67-.67v-.66h0a2,2,0,1,1,4,0M16,18h.67a.66.66,0,0,0,.66-.67v-10L15.33,6l-2,1.33v4H10.67v-4L8.67,6l-2,1.33v10a.67.67,0,0,0,.66.67H8.67M14,16.67v.66a.67.67,0,0,0,.67.67H16'
    />
    <path fill='none' d='M8.68,8.67h0' />
    <path fill='none' d='M8.67,10.67h0' />
    <path fill='none' d='M8.67,12.67h0' />
    <path fill='none' d='M15.33,8.67h0' />
    <path fill='none' d='M15.33,10.66h0' />
    <path fill='none' d='M15.33,12.66h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8.67,18h.66a.67.67,0,0,0,.67-.67v-.66h0a2,2,0,1,1,4,0M16,18h.67a.66.66,0,0,0,.66-.67v-10L15.33,6l-2,1.33v4H10.67v-4L8.67,6l-2,1.33v10a.67.67,0,0,0,.66.67H8.67M14,16.67v.66a.67.67,0,0,0,.67.67H16'
    />
    <path fill='none' d='M8.68,8.67h0' />
    <path fill='none' d='M8.67,10.67h0' />
    <path fill='none' d='M8.67,12.67h0' />
    <path fill='none' d='M15.33,8.67h0' />
    <path fill='none' d='M15.33,10.66h0' />
    <path fill='none' d='M15.33,12.66h0' />
  </Fragment>
)

const Fortress = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Fortress
