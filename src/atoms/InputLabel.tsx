import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

const InputLabel:any = ({ children, ...props }:any) => {
  return (
    <Typography {...props}>
      {children}
    </Typography>
  )
}

InputLabel.propTypes = {
  children: PropTypes.node
}

export default InputLabel
