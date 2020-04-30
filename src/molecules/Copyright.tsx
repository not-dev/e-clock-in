import { Link, Typography } from '@material-ui/core'
import React from 'react'

const Copyright:React.FC = (props) => {
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

export { Copyright }
