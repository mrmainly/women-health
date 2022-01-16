import * as React from 'react';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Avatar, FormControlLabel, Checkbox, Grid, Box, Typography, CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Input, Form, MyButton, MyLink } from '../../components'
import themeMain from '../../theme'

const theme = createTheme();

export default function Register() {
    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                Copyright © Якутский республиканский онкологический диспансер
                {new Date().getFullYear()}.
            </Typography>
        );
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
                        Бэлиэтэнии (регистрация)
                    </Typography>
                    <Form sx={{ mt: 1 }}>
                        <Input
                            variant="outlined"
                            label="Аатыҥ*"
                        />
                        <Input
                            variant="outlined"
                            label="Араспаанньаҥ*"
                        />
                        <Input
                            variant="outlined"
                            label="Аҕаҥ аата*"
                        />
                        <Input
                            variant="outlined"
                            label="Куорат"
                        />
                        <Input
                            variant="outlined"
                            label="Төлөпүөнүҥ нүөмэрэ*"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Тус бэйэҥ туһунан дааннайдары туһанарбытын көҥүллүүр сурук"
                        />
                        <MyButton
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: '100%', bgcolor: themeMain.palette.primary.main, color: 'black' }}
                        >
                            Киирии
                        </MyButton>
                    </Form>
                    <Grid container>
                        <Grid item xs>
                            <MyLink href="/login" sx={{ fontSize: 14, color: themeMain.palette.primary.main }}>
                                Бэлиэтэммитиҥ дуо, урут? Киирэргэ
                            </MyLink>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 2, mb: 4 }} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}