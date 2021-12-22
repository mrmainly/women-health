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
                <MyText variant="h4" sm={20} md={30} sx={{ color: '#245852' }}>В рамках реализации национального проекта «Здравоохранение»
                    Якутским республиканским онкологическим диспансером
                    разработан пилотный проект «ОНКОПОИСКСАХА.РФ»</MyText>
                <TitleScreen variant="h5" color="#245852" width={300}>О проекте</TitleScreen>
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