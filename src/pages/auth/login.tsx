import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Avatar, FormControlLabel, Checkbox, Grid, Box, Typography, CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'

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
    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                Copyright © Якутский республиканский онкологический диспансер
                {new Date().getFullYear()}.
            </Typography>
        );
    }

    const onSubmit = (data: any) => {
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
                        Вход
                    </Typography>
                    <Form sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <Input variant="outlined" label="Номер телефона" {...register('username')} id="username" required type="number" />
                        <Input variant="outlined" label="Пароль" {...register('password')} id="password" required />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить устройство"
                        />
                        <MyButton
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: '100%', bgcolor: themeMain.palette.primary.main, color: 'black' }}
                        >
                            Войти
                        </MyButton>
                    </Form>
                    <Grid container>
                        <Grid item xs>
                            <MyLink href="/forgot" sx={{ fontSize: 14, color: themeMain.palette.primary.main }}>
                                Забыли пароль?
                            </MyLink>
                        </Grid>
                        <Grid item>
                            <MyLink href="/register" sx={{ fontSize: 14, color: themeMain.palette.primary.main, fontWeight: 'bold' }}>
                                У вас нет аккаунта? Зарегистрируйтесь
                            </MyLink>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 2, mb: 4 }} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}