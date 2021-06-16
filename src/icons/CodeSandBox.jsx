import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.33,9v6l-2.66,1.5L12,18,9.33,16.5,6.67,15V9L9.33,7.5,12,6l2.67,1.5Z'
    />
    <path fill='none' d='M12,12l2.67-1.5L17.33,9' />
    <line x1='12' y1='12' x2='12' y2='18' />
    <path fill='none' d='M12,12,9.33,10.5,6.67,9' />
    <path fill='none' d='M17.33,12l-2.66,1.33V16.5' />
    <path fill='none' d='M6.67,12l2.66,1.33V16.5' />
    <path fill='none' d='M9.33,7.5,12,9l2.67-1.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.81,8.87a.56.56,0,0,0,0-.12.58.58,0,0,0-.19-.19L14.93,7.07h0l-2.66-1.5a.55.55,0,0,0-.5,0L9.09,7.06h0L6.42,8.56l-.11.08a.46.46,0,0,0-.12.23.59.59,0,0,0,0,.13v6a.5.5,0,0,0,.25.44l2.63,1.48,2.67,1.5a.44.44,0,0,0,.16.06.07.07,0,0,0,.06,0h.12a.07.07,0,0,0,.06,0,.44.44,0,0,0,.16-.06L15,16.92l2.63-1.48a.5.5,0,0,0,.25-.44V9A.59.59,0,0,0,17.81,8.87ZM10.35,7.5,12,8.43l1.65-.93,1,.57L12.25,9.44a.55.55,0,0,1-.5,0L9.33,8.07Zm-.52,8.71-1-.57v-2l-1.66-.83V11.69l2.39,1.2a.48.48,0,0,1,.27.44Zm7-3.4-1.66.83v2l-1,.57V13.33a.48.48,0,0,1,.27-.44l2.39-1.2Zm0-3L12.5,12.3v4.85l-.5.28-.5-.28V12.3L7.17,9.86V9.29L7.69,9,12,11.42,16.31,9l.52.29Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.33,9v6l-2.66,1.5L12,18,9.33,16.5,6.67,15V9L9.33,7.5,12,6l2.67,1.5Z'
    />
    <path fill='none' d='M12,12l2.67-1.5L17.33,9' />
    <line x1='12' y1='12' x2='12' y2='18' />
    <path fill='none' d='M12,12,9.33,10.5,6.67,9' />
    <path fill='none' d='M17.33,12l-2.66,1.33V16.5' />
    <path fill='none' d='M6.67,12l2.66,1.33V16.5' />
    <path fill='none' d='M9.33,7.5,12,9l2.67-1.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.33,9v6l-2.66,1.5L12,18,9.33,16.5,6.67,15V9L9.33,7.5,12,6l2.67,1.5Z'
    />
    <path fill='none' d='M12,12l2.67-1.5L17.33,9' />
    <line x1='12' y1='12' x2='12' y2='18' />
    <path fill='none' d='M12,12,9.33,10.5,6.67,9' />
    <path fill='none' d='M17.33,12l-2.66,1.33V16.5' />
    <path fill='none' d='M6.67,12l2.66,1.33V16.5' />
    <path fill='none' d='M9.33,7.5,12,9l2.67-1.5' />
  </Fragment>
)

const CodeSandBox = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CodeSandBox
