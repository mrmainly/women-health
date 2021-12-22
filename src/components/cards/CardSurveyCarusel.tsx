import React from 'react'

import { styled } from '@mui/system'
import { Box, Card, CardMedia, MenuItem } from '@mui/material'

import { CaruselSurveyProps } from '../../interface'
import { MyText, MyLink } from '..'

const CardRoot = styled(Card)(({ theme }) => ({
    width: 342,
    height: 430,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 20,
    [theme.breakpoints.down('md')]: {
        width: 300,
        height: 400
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: 400
    },
}))

const CardImg = styled(CardMedia)(({ theme }) => ({
    width: 210,
    height: 210,
}))

const Box1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50%'
}))

const Box2 = styled(Box)(({ theme }) => ({
    height: '50%',
    background: '#F3F8FF',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
}))

const CardSurveyCarusel: React.FC<CaruselSurveyProps> = ({ img, link, label }) => {
    return (
        <CardRoot style={{ marginTop: 20, marginBottom: 20 }}>
            <Box1>
                <CardImg image={`/img/Element/${img}.png`} />
            </Box1>
            <Box2>
                <MyText variant="h4" sm={25}>{label}</MyText>
                <MyLink href={link} sx={{ mt: 2, color: '#6658EA' }}><MenuItem>перейти к тестированию</MenuItem></MyLink>
            </Box2>
        </CardRoot>
    )
}

export default CardSurveyCarusel