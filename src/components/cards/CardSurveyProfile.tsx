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
    paddingTop: 20,
    boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
    borderRadius: '25px 0px',
    transition: 'all 1s ease',
    "&:hover": {
        boxShadow: '0px 0px 20px rgba(0,0,0,0.8)'
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

const CardSurveysProfile: React.FC<CaruselSurveyProps> = ({ img, link, label, id }) => {
    const navigate = useNavigate()
    // let labelCard 
    // switch (label) {
    //     case "Скрининг на заболевание легкого с. Мегино-кангалассы":
    //          <FormattedMessage id="" />
    //       break;
    //     case "Apples":
    //       console.log("Apples are $0.32 a pound.");
    //       break;
    //     case "Bananas":
    //       console.log("Bananas are $0.48 a pound.");
    //       break;
    //     case "Cherries":
    //       console.log("Cherries are $3.00 a pound.");
    //       break;
    //     case "Mangoes":
    //     case "Papayas":
    //       console.log("Mangoes and papayas are $2.79 a pound.");
    //       break;
    //     default:
    //       console.log("Sorry, we are out of " + expr + ".");
    //   }

    return (
        <CardRoot style={{ marginTop: 20, marginBottom: 20 }}>
            <Box1>
                <CardImg image={`/img/Element/${img}.png`} />
            </Box1>
            <Box2>
                <MyText variant="h6" sm={25}>{label}</MyText>
                <MenuItem sx={{ mt: 2, color: '#EB5757' }} onClick={() => {
                    navigate(link, { state: { surveyId: id } })
                }}><FormattedMessage id="check_intestine_survey_go" /></MenuItem>
            </Box2>
        </CardRoot>
    )
}

export default CardSurveysProfile