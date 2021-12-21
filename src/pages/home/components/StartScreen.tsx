import React from 'react'

import { Box, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'

import { MyButton, MyContainer } from '../../../components'

const TitleBox = styled(Grid)(({ theme }) => ({

}))

const Title = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontFamily: 'serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: 30
    },
}))

const Description = styled(Typography)(({ theme }) => ({
    color: 'black',
    marginTop: 40,
    marginBottom: 30
}))

const StartScreen: React.FC = () => {

    return (
        <MyContainer wrapper={true} md={500} sx={{ bgcolor: 'rgba(73, 221, 197, 0.46)', display: 'flex', alignItems: 'center' }}>
            <TitleBox lg={6} xl={6} md={8} sm={12} xs={12} item>
                <Title variant="h3">
                    СКРИНИНГ И РАННЯЯ
                    ДИАГНОСТИКА
                    РАКА В ЯКУТИИ
                </Title>
                <Description variant="body1">
                    В рамках реализации национального проекта «Здравоохранение» Якутским республиканским онкологическим диспансером разработан пилотный проект «ОНКОПОИСКСАХА.РФ»
                </Description>
                <MyButton sx={{ bgcolor: '#01996D' }}>Читать далее</MyButton>
            </TitleBox>
        </MyContainer>
    )
}

export default StartScreen