import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='7.09' y='12.75' width='1.84' height='3.07' rx='0.61' />
    <path
      fill='none'
      d='M8.93,13.36a.61.61,0,0,1,.62-.61h2.3a.61.61,0,0,1,.59.43L13.17,15a.59.59,0,0,1,0,.55.7.7,0,0,1-.53.24H11.39v1.52a.68.68,0,0,1-1.24.37L8.93,15.81Z'
    />
    <path fill='none' d='M13.84,6V8.45a.61.61,0,0,0,.61.62h2.46' />
    <path
      fill='none'
      d='M8.32,10.91V7.23A1.23,1.23,0,0,1,9.55,6h4.29l3.07,3.07v6.74A1.23,1.23,0,0,1,15.68,17H14.15'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect fill='none' x='7.09' y='12.75' width='1.84' height='3.07' rx='0.61' />
    <path d='M8.93,13.36a.61.61,0,0,1,.62-.61h2.3a.61.61,0,0,1,.59.43L13.17,15a.59.59,0,0,1,0,.55.7.7,0,0,1-.53.24H11.39v1.52a.68.68,0,0,1-1.24.37L8.93,15.81Z' />
    <path fill='none' d='M13.84,6V8.45a.61.61,0,0,0,.61.62h2.46' />
    <path
      fill='none'
      d='M8.32,10.91V7.23A1.23,1.23,0,0,1,9.55,6h4.29l3.07,3.07v6.74A1.23,1.23,0,0,1,15.68,17H14.15'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='7.09'
      y='12.75'
      width='1.84'
      height='3.07'
      rx='0.61'
    />
    <path
      fillOpacity='.2'
      d='M8.93,13.36a.61.61,0,0,1,.62-.61h2.3a.61.61,0,0,1,.59.43L13.17,15a.59.59,0,0,1,0,.55.7.7,0,0,1-.53.24H11.39v1.52a.68.68,0,0,1-1.24.37L8.93,15.81Z'
    />
    <path fill='none' d='M13.84,6V8.45a.61.61,0,0,0,.61.62h2.46' />
    <path
      fill='none'
      d='M8.32,10.91V7.23A1.23,1.23,0,0,1,9.55,6h4.29l3.07,3.07v6.74A1.23,1.23,0,0,1,15.68,17H14.15'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='7.09'
      y='12.75'
      width='1.84'
      height='3.07'
      rx='0.61'
    />
    <path
      fill={secondaryColor}
      d='M8.93,13.36a.61.61,0,0,1,.62-.61h2.3a.61.61,0,0,1,.59.43L13.17,15a.59.59,0,0,1,0,.55.7.7,0,0,1-.53.24H11.39v1.52a.68.68,0,0,1-1.24.37L8.93,15.81Z'
    />
    <path fill='none' d='M13.84,6V8.45a.61.61,0,0,0,.61.62h2.46' />
    <path
      fill='none'
      d='M8.32,10.91V7.23A1.23,1.23,0,0,1,9.55,6h4.29l3.07,3.07v6.74A1.23,1.23,0,0,1,15.68,17H14.15'
    />
  </Fragment>
)

const FileDislike = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileDislike
