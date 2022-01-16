import React from 'react'
import { Grid, Box, Container } from '@mui/material'

import { MyText, MyContainer } from '../../../components'
import { PageHeaderText } from '../../../constructor'
import { styled } from '@mui/system'

const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#245852',
    color: 'white',
    width: '90%',
    borderEndEndRadius: 50,
    borderEndStartRadius: 50,
    minHeight: 900,
    [theme.breakpoints.down('lg')]: {
        width: '100%'
    },
}))

const TextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 80
}))

const ImgBox = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center'
    },
}))

const StartScreen = () => {
    const data = [
        {
            number: '964 330',
            description: 'СӨ олохтоохторун ахсаана'
        },
        {
            number: '12 881',
            description: 'киһи СӨ онкологияҕа учуокка турар'
        },
        {
            number: '1 250',
            description: 'СӨ сылга ортотунан рактан сылтаан өлөр'
        },
        {
            number: '24%',
            description: 'Өрөспүүбүлүкэ олохтоохторун 50 саастарыттан аҕа дьон'
        }
    ]

    return (
        <MyContainer wrapper={false}>
            <TextBox>
                <PageHeaderText title="Саха сиригэр элбэх киһини чинчийэн рагы эрдэ булуу" titleSize="h2" tag="Биһиги сүрүн сорукпут" />
                <Grid container style={{ marginTop: 80 }}>
                    {data.map(item => (
                        <Grid item lg={3} xl={3} md={3} sm={3} xs={6} key={item.number}>
                            <MyText variant="h4" sx={{ fontWeight: 600 }}>{item.number}</MyText>
                            <MyText variant="body1" sx={{ width: '95%' }}>{item.description}</MyText>
                        </Grid>
                    ))}
                </Grid>
            </TextBox>
        </MyContainer>
    )
}

export default StartScreen