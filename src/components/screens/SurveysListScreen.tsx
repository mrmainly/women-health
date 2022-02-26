import React from 'react'

import { MyContainer, CardSurvey, MyText } from '..'
import DataSurveys from '../../local_data/CardSurveyCaruselList'

import { Grid, Box } from '@mui/material'
import { FormattedMessage } from "react-intl";
import { styled } from '@mui/system'

const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 80,
    paddingBottom: 50,
    [theme.breakpoints.down('sm')]: {
        paddingTop: 150
    },
}))


const SurveysListScreen = () => {
    return (
        <MyContainer wrapper={true}
            sx={{
                background: `url(${"/img/Background/Rectangle453.png"})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                textAlign: 'center',
            }}
        >
            <BoxWrapper>
                <MyText variant="h4" sx={{ color: 'white', textShadow: '0px 0px 6px rgba(255, 255, 255, 0.55);', fontWeight: 800, marginBottom: 5 }}><FormattedMessage id={'questioning_main_page'} /></MyText>
                <Grid container>
                    {DataSurveys.map((item, index) => (
                        <Grid item lg={4} xl={4} md={4} sm={6} xs={12} key={index}>
                            <CardSurvey img={item.img} label={item.label} link={item.link} />
                        </Grid>
                    ))}
                </Grid>
            </BoxWrapper>
        </MyContainer>
    )
}

export default SurveysListScreen