import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme:Theme) => createStyles({
  title: {
    color: theme.palette.warning.main
  }
}))

type TextDialogProps = DialogProps & {
  onClose: () => void
  handleCancel: () => void
}

const TextDialog:React.FC<TextDialogProps> = (props) => {
  const classes = useStyles()
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      scroll="paper"
    >
      <DialogTitle className={classes.title}>Warning</DialogTitle>
      <DialogContent dividers>
        <DialogContentText style={{ whiteSpace: 'pre-line', margin: '1.5em 0' }}>
          {props.children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { props.onClose(); props.handleCancel() }} color="primary">
          CANCEL
        </Button>
        <Button onClick={props.onClose} color="primary" >
          CONTINUE
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export { TextDialog }
