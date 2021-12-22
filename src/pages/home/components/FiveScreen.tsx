import React from 'react'

import { Box, Typography, Grid, MenuItem, } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

import { MyContainer, MyText, MyLink } from '../../../components'

const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '40%',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
        width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const CardItem = styled(Box)(({ theme }) => ({
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 250,
    borderRadius: 24,
    textAlign: 'center',
    color: 'white',
    padding: 10,
    [theme.breakpoints.down('md')]: {
        marginTop: 20
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))

const FiveScreen: React.FC = () => {
    const cardList = [
        {
            title: 'Регистрация',
            description: 'Быстрая регистрация обеспечивается путем получения смс сообщений, также удобным интерфейсом с простыми формами для регистрации.',
            bgcolor: '#245852',
            link: '/'
        },
        {
            title: 'Анкетирование',
            description: 'Эффективный процесс анкетирования обеспечивается благодаря проработанным анкетам, которые созданы лучшими специалистами.',
            bgcolor: '#01996D',
            link: '/'
        },
        {
            title: 'Приём',
            description: 'Наша система записи позволит вам быстро и удобно выбрать время приема, чтобы не стоять в очередях.',
            bgcolor: '#61D8C5',
            link: '/'
        },

    ]
    return (
        <MyContainer wrapper={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <TitleBox>
                <MyText variant="h3" sm={30} sx={{ fontFamily: 'serif', fontWeight: 'bold' }}>Ваше здоровье - для нас важно!</MyText>
                <MyText variant="h6">Мы заботимся о вас, поэтому создали максимально простую и эффективную систему скрининга.</MyText>
            </TitleBox>
            <Grid container sx={{ mt: 8, display: 'flex', justifyContent: 'center' }} >
                {
                    cardList.map(item => (
                        <Grid item key={item.title} lg={4} xl={4} xs={11} md={4} sm={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <CardItem sx={{ bgcolor: item.bgcolor }}>
                                <MyText variant="h6">{item.title}</MyText>
                                <MyText variant="body2" sx={{ mt: 2 }}>{item.description}</MyText>
                            </CardItem>
                            <MenuItem sx={{ marginTop: 4 }}>
                                <MyLink href={item.link} sx={{ color: 'red' }}>перейти &gt;</MyLink>
                            </MenuItem>
                        </Grid>
                    ))
                }
            </Grid>
        </MyContainer >
    )
}

export default FiveScreen