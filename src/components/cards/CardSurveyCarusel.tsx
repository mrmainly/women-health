import React from 'react'

import { styled } from '@mui/system'
import { Box, Card, CardMedia, MenuItem } from '@mui/material'
import { FormattedMessage } from "react-intl";

import { CaruselSurveyProps } from '../../interface'
import { MyText, MyLink } from '..'

const CardRoot = styled(Box)(({ theme }) => ({
    width: 342,
    height: 400,
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
    height: 210
}))

const Box2 = styled(Box)(({ theme }) => ({
    height: '50%',
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
                <MyText variant="h6" sm={25}>{label}</MyText>
                <MyLink href={link} sx={{ mt: 2, color: '#EB5757' }}><MenuItem><FormattedMessage id="go_to" /></MenuItem></MyLink>
            </Box2>
        </CardRoot>
    )
}

export default CardSurveyCarusel