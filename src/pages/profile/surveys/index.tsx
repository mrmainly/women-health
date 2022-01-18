import React from 'react'

import { MenuProfile, MyContainer, CardSurveysProfile, MyText } from '../../../components'
import DataSurveys from '../../../Data/CardSurveyProfile'

import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Surveys = () => {
    return (
        <MyContainer wrapper={false} sx={{ display: 'flex' }}>
            <MenuProfile />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10 }}>
                <MyText variant="h5">Анкета</MyText>
                <Grid container>
                    {DataSurveys.map((item, index) => (
                        <Grid item lg={4} xl={4} md={4} sm={6} xs={12} key={index}>
                            <CardSurveysProfile img={item.img} label={item.label} link={item.link} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </MyContainer>
    )
}

export default Surveys