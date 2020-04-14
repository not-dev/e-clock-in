
import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Link } from '@material-ui/core'

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {props.children || 'Your website'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

Copyright.propTypes = {
  children: PropTypes.node
}

export default Copyright
