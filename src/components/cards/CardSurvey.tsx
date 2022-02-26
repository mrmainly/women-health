import React from 'react'

import { styled } from '@mui/system'
import { Box, Card, CardMedia, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { CaruselSurveyProps } from '../../interface'
import { MyText, MyLink } from '..'
import { FormattedMessage } from "react-intl";

const CardRoot = styled(Box)(({ theme }) => ({
    width: '95%',
    height: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
    borderRadius: '25px 0px',
    transition: 'all 1s ease',
    background: 'white',
    "&:hover": {
        boxShadow: '0px 0px 20px rgba(0,0,0,0.8)'
    },
    [theme.breakpoints.down('sm')]: {
        height: '90%',
        padding: 10
    },
}))

const CardImg = styled(CardMedia)(({ theme }) => ({
    width: 210,
    height: 210,
    marginTop: 30
}))

const Box2 = styled(Box)(({ theme }) => ({
    height: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
}))

const CardSurveys: React.FC<CaruselSurveyProps> = ({ img, link, label }) => {
    const navigate = useNavigate()

    return (
        <CardRoot>
            <Box>
                <CardImg image={`/img/Element/${img}.png`} />
            </Box>
            <Box2>
                <MyText variant="h5" sm={25}>{label}</MyText>
                <MyLink href={link} sx={{ mt: 2, color: '#EB5757' }}><MenuItem>
                    <FormattedMessage id="check_intestine_survey_go" />
                </MenuItem></MyLink>
            </Box2>
        </CardRoot>
    )
}

export default CardSurveys