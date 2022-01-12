import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid, Typography } from '@mui/material'

import { MyContainer, MyButton } from '../../../components'
import { Plus } from '../../../svg'

const MainBox = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    hieght: '100%',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
        marginTop: 0
    },
}))

const GridText = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        paddingLeft: 15,
        marginBottom: 50
    },
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 10,
    },
}))

const Title = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: 25
    },
}))

const TextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
}))

const FourScreen: React.FC = () => {
    return (
        <MyContainer wrapper={true} sm={700} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F3FEFF' }}>
            <MainBox container>
                <GridText item lg={5} xl={5} md={6} sm={12} xs={12}>
                    <Title variant="h3">ЛИЧНЫЙ КАБИНЕТ</Title>
                    <Typography variant="h6" sx={{ mt: 2 }}>Результаты будут храниться в личном кабинете.
                        Плюсы:</Typography>
                    <Box sx={{ mt: 2 }}>
                        <TextBox>
                            <Plus />
                            <Typography variant="body1" sx={{ ml: 1 }}>Доступ 24/7</Typography>
                        </TextBox>
                        <TextBox>
                            <Plus />
                            <Typography variant="body1" sx={{ ml: 1 }}>Интеграция с мед. системами</Typography>
                        </TextBox>
                        <TextBox>
                            <Plus />
                            <Typography variant="body1" sx={{ ml: 1 }}>Выбор удобного времени приема</Typography>
                        </TextBox>
                        <MyButton sx={{ mt: 2, bgcolor: '#EB5757' }}>Перейти в личный кабинет</MyButton>
                    </Box>
                </GridText>
                <Grid item lg={7} xl={7} md={6} sm={12} xs={12}>
                    <img style={{ width: '100%' }} src={'/img/Background/info_platform1.png'} />
                </Grid>
            </MainBox>
        </MyContainer>
    )
}

export default FourScreen