import React from 'react'

import { MenuProfile, MyContainer, CardSurveysProfile, MyText } from '../../../components'

import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'

const DataSurveys = [
    {
        img: 'liver',
        label: 'Быары чинчийии',
        link: '/liver-form'
    },
    {
        img: 'gut',
        label: 'Суон оһоҕоһу чинчийии.',
        link: '/gut-form'
    },
    {
        img: 'breath',
        label: 'Тыҥаны чинчийии',
        link: '/breath-form'
    },
    {
        img: 'breast',
        label: 'Эмиийи чинчийии',
        link: '/breast-form'
    },
    {
        img: 'cervix',
        label: 'Киэли хапчаҕайын чинчийии',
        link: '/cervix-form'
    },
    {
        img: 'prostata',
        label: 'Самах былчархайын чинчийии',
        link: '/prostate-form'
    }
]

const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
}))

const Surveys = () => {
    return (
        <MyContainer wrapper={false}>
            <BoxWrapper>
                <MenuProfile />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10, ml: 2 }}>
                    <MyText variant="h5">Анкеталар</MyText>
                    <Grid container>
                        {DataSurveys.map((item, index) => (
                            <Grid item lg={4} xl={4} md={6} sm={6} xs={12} key={index}>
                                <CardSurveysProfile img={item.img} label={item.label} link={item.link} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </BoxWrapper>
        </MyContainer>
    )
}

export default Surveys