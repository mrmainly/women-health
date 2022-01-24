import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { Button, Dialog, DialogContent, DialogActions, Typography } from '@mui/material'

import { StateContext } from '../../store'

const ModalSurveyStatus = () => {
    const state = useContext(StateContext)
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState('')
    const navigate = useNavigate()
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setOpen(state.modalSurveys.open)
        setText(state.modalSurveys.description)
    }, [state.modalSurveys.open])
    console.log(state)
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <div style={{ paddingTop: 5 }}>
                <Typography variant="h5" gutterBottom style={{ paddingLeft: 15 }}>
                    Ваш результат:
                </Typography>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {text}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color={'primary'} autoFocus onClick={() => {
                        navigate('/surveys')
                    }}>
                        Остальные анкеты
                    </Button>
                    <Button variant="contained" color={'secondary'} onClick={handleClose}>
                        Закрыть
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
}

export default ModalSurveyStatus