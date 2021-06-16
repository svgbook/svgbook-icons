import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18.53,10.47,12.11,18a.14.14,0,0,1-.2,0l0,0L5.47,10.47a.29.29,0,0,1,0-.35l2.69-3.6a.31.31,0,0,1,.2-.11L12,6H12l3.63.41a.31.31,0,0,1,.19.11l2.69,3.6A.27.27,0,0,1,18.53,10.47Z'
    />
    <path
      stroke='none'
      d='M17.79,10.26a.07.07,0,0,1-.06,0H16.44a.21.21,0,0,0-.19.11l-3.11,5.5A.08.08,0,0,1,13,16a.09.09,0,0,1,0-.11l2.51-5.3a.16.16,0,0,0-.08-.22l-.07,0H8.65a.18.18,0,0,0-.17.17.19.19,0,0,0,0,.07L11,15.84a.08.08,0,0,1-.15.07l-3.11-5.5a.21.21,0,0,0-.19-.11H6.27a.06.06,0,0,1-.06-.05.06.06,0,0,1,0-.06l1.29-.28a.2.2,0,0,0,.17-.16l.52-2.31a.07.07,0,0,1,.07,0s0,0,0,.06l-.09,2a.12.12,0,0,0,.1.12.1.1,0,0,0,.09,0l2.76-2.76a.07.07,0,0,1,.09,0,.06.06,0,0,1,0,.08l-2,2.52a.14.14,0,0,0,0,.2l.09,0h5.26a.14.14,0,0,0,.14-.14.16.16,0,0,0,0-.09l-2-2.52a.05.05,0,0,1,0-.08.06.06,0,0,1,.08,0l2.76,2.76a.1.1,0,0,0,.16,0,.11.11,0,0,0,0-.08l-.09-2a.05.05,0,0,1,0-.06.07.07,0,0,1,.06,0l.52,2.31a.21.21,0,0,0,.17.16l1.29.28A.08.08,0,0,1,17.79,10.26Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      fillRule='evenodd'
      d='M5.46,10.12l2.69-3.6a.31.31,0,0,1,.2-.11L12,6H12l3.63.41a.31.31,0,0,1,.19.11l2.69,3.6a.27.27,0,0,1,0,.35L12.11,18a.14.14,0,0,1-.2,0v0L5.47,10.47A.29.29,0,0,1,5.46,10.12Zm7.33-3.34,2.76,2.76a.1.1,0,0,0,.16,0,.11.11,0,0,0,0-.08l-.09-2a.05.05,0,0,1,0-.06.07.07,0,0,1,.06,0l.52,2.31a.21.21,0,0,0,.17.16l1.29.28a.08.08,0,0,1,.05.07.07.07,0,0,1-.06,0H16.44a.21.21,0,0,0-.19.11l-3.11,5.5A.08.08,0,0,1,13,16a.1.1,0,0,1,0-.11l2.51-5.3a.16.16,0,0,0-.08-.22l-.07,0H8.65a.18.18,0,0,0-.17.17.19.19,0,0,0,0,.07L11,15.84a.08.08,0,0,1-.15.07l-3.11-5.5a.21.21,0,0,0-.19-.11H6.27a.06.06,0,0,1-.06-.05.06.06,0,0,1,0-.06l1.29-.28a.2.2,0,0,0,.17-.16l.53-2.31s0,0,.06,0,0,0,0,.06l-.09,2a.12.12,0,0,0,.1.12.1.1,0,0,0,.09,0l2.76-2.76a.07.07,0,0,1,.09,0,.06.06,0,0,1,0,.08l-2,2.52a.14.14,0,0,0,0,.2l.09,0h5.26a.14.14,0,0,0,.14-.14.16.16,0,0,0,0-.09l-2-2.52a.05.05,0,0,1,0-.08A.06.06,0,0,1,12.79,6.78Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M18.53,10.47,12.11,18a.14.14,0,0,1-.2,0l0,0L5.47,10.47a.29.29,0,0,1,0-.35l2.69-3.6a.31.31,0,0,1,.2-.11L12,6H12l3.63.41a.31.31,0,0,1,.19.11l2.69,3.6A.27.27,0,0,1,18.53,10.47Z'
    />
    <path
      stroke='none'
      d='M17.79,10.26a.07.07,0,0,1-.06,0H16.44a.21.21,0,0,0-.19.11l-3.11,5.5A.08.08,0,0,1,13,16a.09.09,0,0,1,0-.11l2.51-5.3a.16.16,0,0,0-.08-.22l-.07,0H8.65a.18.18,0,0,0-.17.17.19.19,0,0,0,0,.07L11,15.84a.08.08,0,0,1-.15.07l-3.11-5.5a.21.21,0,0,0-.19-.11H6.27a.06.06,0,0,1-.06-.05.06.06,0,0,1,0-.06l1.29-.28a.2.2,0,0,0,.17-.16l.52-2.31a.07.07,0,0,1,.07,0s0,0,0,.06l-.09,2a.12.12,0,0,0,.1.12.1.1,0,0,0,.09,0l2.76-2.76a.07.07,0,0,1,.09,0,.06.06,0,0,1,0,.08l-2,2.52a.14.14,0,0,0,0,.2l.09,0h5.26a.14.14,0,0,0,.14-.14.16.16,0,0,0,0-.09l-2-2.52a.05.05,0,0,1,0-.08.06.06,0,0,1,.08,0l2.76,2.76a.1.1,0,0,0,.16,0,.11.11,0,0,0,0-.08l-.09-2a.05.05,0,0,1,0-.06.07.07,0,0,1,.06,0l.52,2.31a.21.21,0,0,0,.17.16l1.29.28A.08.08,0,0,1,17.79,10.26Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18.53,10.47,12.11,18a.14.14,0,0,1-.2,0l0,0L5.47,10.47a.29.29,0,0,1,0-.35l2.69-3.6a.31.31,0,0,1,.2-.11L12,6H12l3.63.41a.31.31,0,0,1,.19.11l2.69,3.6A.27.27,0,0,1,18.53,10.47Z'
    />
    <path
      stroke='none'
      d='M17.79,10.26a.07.07,0,0,1-.06,0H16.44a.21.21,0,0,0-.19.11l-3.11,5.5A.08.08,0,0,1,13,16a.09.09,0,0,1,0-.11l2.51-5.3a.16.16,0,0,0-.08-.22l-.07,0H8.65a.18.18,0,0,0-.17.17.19.19,0,0,0,0,.07L11,15.84a.08.08,0,0,1-.15.07l-3.11-5.5a.21.21,0,0,0-.19-.11H6.27a.06.06,0,0,1-.06-.05.06.06,0,0,1,0-.06l1.29-.28a.2.2,0,0,0,.17-.16l.52-2.31a.07.07,0,0,1,.07,0s0,0,0,.06l-.09,2a.12.12,0,0,0,.1.12.1.1,0,0,0,.09,0l2.76-2.76a.07.07,0,0,1,.09,0,.06.06,0,0,1,0,.08l-2,2.52a.14.14,0,0,0,0,.2l.09,0h5.26a.14.14,0,0,0,.14-.14.16.16,0,0,0,0-.09l-2-2.52a.05.05,0,0,1,0-.08.06.06,0,0,1,.08,0l2.76,2.76a.1.1,0,0,0,.16,0,.11.11,0,0,0,0-.08l-.09-2a.05.05,0,0,1,0-.06.07.07,0,0,1,.06,0l.52,2.31a.21.21,0,0,0,.17.16l1.29.28A.08.08,0,0,1,17.79,10.26Z'
    />
  </Fragment>
)

const Sketch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Sketch