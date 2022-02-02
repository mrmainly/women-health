import React, { useContext, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography, Dialog } from "@mui/material";
import { styled } from '@mui/system'
import { FormattedMessage } from "react-intl";

import { StateContext } from '../../store'

const Modal = styled(Dialog)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const Paper = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    '&:focus': {
        outline: 'none',
        opacity: 100,
        zIndex: 1,
    },
    width: 400,
    borderRadius: 20,
    transition: 'all 0.4s',
    padding: 20,
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

export default function ModalTrue() {
    const [open, setOpen] = React.useState(true);
    const [name, setName] = React.useState('')
    const state = useContext(StateContext)
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setName(state.modalSurveys.username)
    }, [state.modalSurveys.username])

    return (
        <div>
            <Modal onClose={handleClose}
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <Paper style={{ paddingTop: 15 }}>
                    <Typography variant="h5" gutterBottom >
                        Уважаемый(ая), {name ? name : ''}
                    </Typography>
                    <Box>
                        <Typography gutterBottom>
                            <FormattedMessage id="modal_surveys" />
                        </Typography>
                    </Box>
                    <Button variant="contained" color={'secondary'} onClick={handleClose} sx={{ mt: 1 }}>
                        Закрыть
                    </Button>
                </Paper>
            </Modal>
        </div>
    );
}