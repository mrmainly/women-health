import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Avatar, FormControlLabel, Checkbox, Grid, Box, Typography, CssBaseline, Container, TextField, MenuItem } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'

import { Input, Form, MyButton, MyLink } from '../../components'
import themeMain from '../../theme'
import { DispatchContext } from '../../store'
import API from '../../utils/api'

const theme = createTheme();

export default function Register() {
    const [city, setCity] = useState([{ name: '1', id: '1' }])
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
        API.register(data, dispatch, navigate)
    }

    const get_city = async () => {
        await API.getCity().then((res) => {
            setCity(res.data.results)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        get_city()
    }, [])
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
                    <Form sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            variant="outlined"
                            label="Аатыҥ*"
                            {...register('first_name')}
                        />
                        <Input
                            variant="outlined"
                            label="Араспаанньаҥ*"
                            {...register('last_name')}
                        />
                        <Input
                            variant="outlined"
                            label="Аҕаҥ аата*"
                            {...register('patronymic')}
                        />
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label="Куорат"
                            SelectProps={{
                                native: true,
                            }}
                            {...register('city')}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        >
                            {city.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </TextField>
                        <Input
                            variant="outlined"
                            label="Төлөпүөнүҥ нүөмэрэ*"
                            {...register('phone')}
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