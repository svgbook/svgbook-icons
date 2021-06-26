import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,9.67l.66.66S7.66,9.6,8,10s1.24,5.08,1.66,6S11,17.89,12.3,17s5-3.65,5.65-7.63c.29-1.77-.67-2.66-1.66-2.66a3,3,0,0,0-3,2.66c1.36-.83,1.69.66,1,2s-1.33,2-1.66,2-.62-.77-1-2.32-.33-4.32-2-4.32S6,9.67,6,9.67Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6,9.67l.66.66S7.66,9.6,8,10s1.24,5.08,1.66,6S11,17.89,12.3,17s5-3.65,5.65-7.63c.29-1.77-.67-2.66-1.66-2.66a3,3,0,0,0-3,2.66c1.36-.83,1.69.66,1,2s-1.33,2-1.66,2-.62-.77-1-2.32-.33-4.32-2-4.32S6,9.67,6,9.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6,9.67l.66.66S7.66,9.6,8,10s1.24,5.08,1.66,6S11,17.89,12.3,17s5-3.65,5.65-7.63c.29-1.77-.67-2.66-1.66-2.66a3,3,0,0,0-3,2.66c1.36-.83,1.69.66,1,2s-1.33,2-1.66,2-.62-.77-1-2.32-.33-4.32-2-4.32S6,9.67,6,9.67Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6,9.67l.66.66S7.66,9.6,8,10s1.24,5.08,1.66,6S11,17.89,12.3,17s5-3.65,5.65-7.63c.29-1.77-.67-2.66-1.66-2.66a3,3,0,0,0-3,2.66c1.36-.83,1.69.66,1,2s-1.33,2-1.66,2-.62-.77-1-2.32-.33-4.32-2-4.32S6,9.67,6,9.67Z'
    />
  </Fragment>
)

const Vimeo = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Vimeo
