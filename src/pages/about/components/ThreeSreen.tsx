import React from 'react'

import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

import { MyContainer, MyText, CardAbout } from '../../../components'
import CardAboutList from '../../../Data/CardAbout'
import { TitleScreen } from '../../../constructor'

const ThreeScreen = () => {
    return (
        <MyContainer wrapper={false} sx={{ mt: 10 }}>
            <Box style={{ textAlign: 'center' }}>
                <TitleScreen variant="h5" color="#245852" width={300}>Бырайыак туһунан</TitleScreen>
                <Box style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                    {CardAboutList.map((item, index) => (
                        <CardAbout key={index} id={item.id} title={item.title} body={item.body} bgcolor={item.color} />
                    ))}
                </Box>
            </Box>
        </MyContainer>
    )
}

export default ThreeScreen