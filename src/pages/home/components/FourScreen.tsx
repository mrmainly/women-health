import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid, Typography } from '@mui/material'

import { MyContainer, MyButton } from '../../../components'

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
                    <Title variant="h3">ТУС ХОС</Title>
                    <Typography variant="body1" sx={{ mt: 2 }}>Результаты будут храниться в личном кабинете.
                        Түмүктэр тус хоскор харалла сытыахтара Туһата:</Typography>
                    <Box sx={{ mt: 2 }}>
                        <TextBox>
                            <img src="/img/Element/plus.png" />
                            <Typography variant="body1" sx={{ ml: 1 }}>Сууккаҕа 24 чаас, нэдиэлэҕэ 7 күн тухары, ол аата хаһан баҕарар көрүөххэ сөп</Typography>
                        </TextBox>
                        <TextBox>
                            <img src="/img/Element/plus.png" />
                            <Typography variant="body1" sx={{ ml: 1 }}>Балыыһалары кытта ситимнээх</Typography>
                        </TextBox>
                        <TextBox>
                            <img src="/img/Element/plus.png" />
                            <Typography variant="body1" sx={{ ml: 1 }}>Бырааска хаһан сылдьаргын бэйэҥ талыаххын сөп</Typography>
                        </TextBox>
                        <MyButton sx={{ mt: 2, bgcolor: '#EB5757' }}>Тус хоскор көһүү</MyButton>
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