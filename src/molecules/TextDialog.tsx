import React from 'react'
import PropTypes from 'prop-types'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.warning.main
  }
}))

const TextDialog = (props:any) => {
  const classes = useStyles()
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      scroll="paper"
    >
      <DialogTitle className={classes.title}>Warning</DialogTitle>
      <DialogContent dividers>
        <DialogContentText style={{ whiteSpace: 'pre-line', margin: '1.5em 0' }}>
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { props.handleClose(); props.handleCancel(props.name) }} color="primary">
          CANCEL
        </Button>
        <Button onClick={props.handleClose} color="primary" >
          CONTINUE
        </Button>
      </DialogActions>
    </Dialog>
  )
}

TextDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleCancel: PropTypes.func,
  content: PropTypes.node,
  name: PropTypes.string
}

export default TextDialog
