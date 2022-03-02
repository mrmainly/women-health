import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Avatar, FormControlLabel, Checkbox, Grid, Box, Typography, CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { FormattedMessage } from "react-intl";

import { Input, Form, MyButton, MyLink } from '../../components'
import { DispatchContext, StateContext } from '../../store'
import API from '../../utils/api'
import themeMain from '../../theme'

const theme = createTheme();

export default function Login() {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                Copyright © Якутский республиканский онкологический диспансер
                {new Date().getFullYear()}.
            </Typography>
        );
    }

    const onSubmit = (data) => {
        API.getToken({ ...data }, dispatch, navigate)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: themeMain.palette.primary.main }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <FormattedMessage id="entry" />
                    </Typography>
                    <Form sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <InputMask
                            mask="79999999999"
                            disabled={false}
                            maskChar=""
                            {...register('username')}
                        >
                            {() => <Input {...register('username')} id="phone" label={<FormattedMessage id="entry_phone" />} required />}
                        </InputMask>
                        <Input variant="outlined" label={<FormattedMessage id="entry_password" />} {...register('password')} id="password" required />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label={<FormattedMessage id="entry_remember_device" />}
                        />
                        <MyButton
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: '100%', bgcolor: themeMain.palette.primary.main }}
                        >
                            Войти
                        </MyButton>
                    </Form>
                    <Grid container>
                        <Grid item xs>
                            <MyLink href="/forgot" sx={{ fontSize: 14, color: themeMain.palette.primary.main }}>
                                {<FormattedMessage id="entry_forgot_password" />}
                            </MyLink>
                        </Grid>
                        <Grid item>
                            <MyLink href="/register" sx={{ fontSize: 14, color: themeMain.palette.primary.main, fontWeight: 'bold' }}>
                                {<FormattedMessage id="entry_no_account" />}
                            </MyLink>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 2, mb: 4 }} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}