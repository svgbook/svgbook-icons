import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <ellipse fill='none' cx='14.67' cy='8' rx='3.33' ry='2' />
    <path fill='none' d='M11.33,8v2.67c0,1.1,1.5,2,3.34,2s3.33-.9,3.33-2V8' />
    <path
      fill='none'
      d='M11.33,10.67v2.66c0,1.11,1.5,2,3.34,2s3.33-.89,3.33-2V10.67'
    />
    <path
      fill='none'
      d='M11.33,13.33V16c0,1.1,1.5,2,3.34,2S18,17.1,18,16V13.33'
    />
    <path fill='none' d='M8.67,10H7a1,1,0,0,0,0,2h.67a1,1,0,1,1,0,2H6' />
    <path fill='none' d='M7.33,14v.67m0-5.34V10' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <ellipse fill='none' cx='14.67' cy='8' rx='3.33' ry='2' />
    <path fill='none' d='M11.33,8v2.67c0,1.1,1.5,2,3.34,2s3.33-.9,3.33-2V8' />
    <path
      fill='none'
      d='M11.33,10.67v2.66c0,1.11,1.5,2,3.34,2s3.33-.89,3.33-2V10.67'
    />
    <path
      fill='none'
      d='M11.33,13.33V16c0,1.1,1.5,2,3.34,2S18,17.1,18,16V13.33'
    />
    <path fill='none' d='M8.67,10H7a1,1,0,0,0,0,2h.67a1,1,0,1,1,0,2H6' />
    <path fill='none' d='M7.33,14v.67m0-5.34V10' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <ellipse fill='none' cx='14.67' cy='8' rx='3.33' ry='2' />
    <path fill='none' d='M11.33,8v2.67c0,1.1,1.5,2,3.34,2s3.33-.9,3.33-2V8' />
    <path
      fill='none'
      d='M11.33,10.67v2.66c0,1.11,1.5,2,3.34,2s3.33-.89,3.33-2V10.67'
    />
    <path
      fill='none'
      d='M11.33,13.33V16c0,1.1,1.5,2,3.34,2S18,17.1,18,16V13.33'
    />
    <path fill='none' d='M8.67,10H7a1,1,0,0,0,0,2h.67a1,1,0,1,1,0,2H6' />
    <path fill='none' d='M7.33,14v.67m0-5.34V10' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <ellipse
      fill='none'
      stroke={secondaryColor}
      cx='14.67'
      cy='8'
      rx='3.33'
      ry='2'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,8v2.67c0,1.1,1.5,2,3.34,2s3.33-.9,3.33-2V8'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,10.67v2.66c0,1.11,1.5,2,3.34,2s3.33-.89,3.33-2V10.67'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,13.33V16c0,1.1,1.5,2,3.34,2S18,17.1,18,16V13.33'
    />
    <path fill='none' d='M8.67,10H7a1,1,0,0,0,0,2h.67a1,1,0,1,1,0,2H6' />
    <path fill='none' d='M7.33,14v.67m0-5.34V10' />
  </Fragment>
)

const BusinessPlan = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BusinessPlan
