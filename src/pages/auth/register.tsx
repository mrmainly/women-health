import * as React from 'react';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Avatar, FormControlLabel, Checkbox, Grid, Box, Typography, CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Input, Form, MyButton, MyLink } from '../../components'
import themeMain from '../../theme'

const theme = createTheme();

export default function Register() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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
                    <Form sx={{ mt: 1 }}>
                        <Input
                            variant="outlined"
                            label="Номер телефона"
                        />
                        <Input
                            variant="outlined"
                            label="Пароль"
                        />
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
                            <MyLink href="/" sx={{ fontSize: 14, color: themeMain.palette.primary.main }}>
                                Забыли пароль?
                            </MyLink>
                        </Grid>
                        <Grid item>
                            <MyLink href="/register" sx={{ fontSize: 14, color: themeMain.palette.primary.main, fontWeight: 'bold' }}>
                                У вас нет аккаунта? Зарегистрируйтесь
                            </MyLink>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}