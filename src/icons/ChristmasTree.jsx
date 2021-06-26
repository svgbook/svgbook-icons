import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,6l2.67,2.67-1.34.66L16,12l-2,.67,2.67,2.66H7.33L10,12.67,8,12l2.67-2.67L9.33,8.67Z'
    />
    <path
      fill='none'
      d='M13.33,15.33v2a.66.66,0,0,1-.66.67H11.33a.67.67,0,0,1-.66-.67v-2'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6l2.67,2.67-1.34.66L16,12l-2,.67,2.67,2.66H7.33L10,12.67,8,12l2.67-2.67L9.33,8.67Z' />
    <path d='M13.33,15.33v2a.66.66,0,0,1-.66.67H11.33a.67.67,0,0,1-.66-.67v-2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,6l2.67,2.67-1.34.66L16,12l-2,.67,2.67,2.66H7.33L10,12.67,8,12l2.67-2.67L9.33,8.67Z'
    />
    <path
      fillOpacity='.2'
      d='M13.33,15.33v2a.66.66,0,0,1-.66.67H11.33a.67.67,0,0,1-.66-.67v-2'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,6l2.67,2.67-1.34.66L16,12l-2,.67,2.67,2.66H7.33L10,12.67,8,12l2.67-2.67L9.33,8.67Z'
    />
    <path d='M13.33,15.33v2a.66.66,0,0,1-.66.67H11.33a.67.67,0,0,1-.66-.67v-2' />
  </Fragment>
)

const ChristmasTree = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChristmasTree
