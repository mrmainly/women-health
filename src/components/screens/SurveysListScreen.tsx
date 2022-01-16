import React from 'react'

import { MyContainer, CardSurvey, MyText } from '..'
import DataSurveys from '../../Data/CardSurveyCaruselList'

import { Grid } from '@mui/material'

const SurveysListScreen = () => {
    return (
        <MyContainer wrapper={true}
            sx={{
                bgcolor: '#49DDC5',
                textAlign: 'center',
                pt: 2,
                pb: 15
            }}
            minHeight={600}
        >
            <MyText variant="h5">Анкеталар</MyText>
            <Grid container>
                {DataSurveys.map((item, index) => (
                    <Grid item lg={4} xl={4} md={4} sm={6} xs={12} key={index}>
                        <CardSurvey img={item.img} label={item.label} link={item.link} />
                    </Grid>
                ))}
            </Grid>
        </MyContainer>
    )
}

export default SurveysListScreen