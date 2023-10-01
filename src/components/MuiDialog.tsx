import { 
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
 } from '@mui/material'

 import { useState } from 'react'

export const MuiDialog = () => {
    const [open, setOpen] = useState()
    return(
        <>
            <Button
                onClick={() => setOpen(true)}
            >Open Dialog</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labrlledby='dialog-title'
                aria-describedby='dialog-description'
            >
                <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        Are you sure yuo want to submit the test? You will not able to edit after submitting
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                    >Cancel</Button>
                    <Button
                        autoFocus
                        onClick={() => setOpen(false)}
                    >Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}