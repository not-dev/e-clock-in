import { Grid, GridProps } from '@material-ui/core'
import React from 'react'

const MyGrid:React.FC<GridProps> = ({ children, ...props }) => {
  const containerprops:GridProps|false|undefined = props.container && {
    justify: 'center',
    alignItems: 'center',
    spacing: 2
  }
  const itemprops:GridProps|false|undefined = props.item && {
    xs: 12
  }
  return (
    <Grid {...containerprops} {...itemprops} {...props}>
      {children}
    </Grid>
  )
}

export { MyGrid }
