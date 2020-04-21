import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'

const MyGrid:any = ({ children, ...props }:any) => {
  const containerprops = props.container && {
    justify: 'center',
    alignItems: 'center',
    spacing: 2
  }
  const itemprops = props.item && {
    xs: 12
  }
  return (
    <Grid {...containerprops} {...itemprops} {...props}>
      {children}
    </Grid>
  )
}

MyGrid.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
  item: PropTypes.bool
}

export default MyGrid
