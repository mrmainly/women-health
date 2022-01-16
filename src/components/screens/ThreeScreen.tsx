import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'

import { MyContainer, MyText, MyButton } from '..'

const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
}))

const GreenLine = styled(Box)(({ theme }) => ({
    height: 3,
    width: '50%',
    background: '#61D8C5',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
        width: '90%'
    },
}))

interface ThreeScreenProps {
    data: any,
    showInfoText: boolean
}

const ThreeScreen: React.FC<ThreeScreenProps> = ({ data, showInfoText }) => {
    return (
        <MyContainer wrapper={false} minHeight={600}>
            <TitleBox>
                <MyText variant="h6">Для определения группы риска просим зарегистрироваться на портале и пройти универсальный анкетный тест </MyText>
                <MyButton color="error" sx={{ mt: 2 }}>Посмотреть доступные анкеты</MyButton>
            </TitleBox>
            <Grid container sx={{ mt: 10 }}>
                <Grid item lg={6} xl={6} sm={12} md={6} xs={12}>
                    <img src={'/img/Element/element.png'} style={{ width: '100%' }} />
                </Grid>
                <Grid item lg={6} xl={6} sm={12} md={6} xs={12} sx={{ pl: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {data[0].align == 'center' ? '' : <MyText variant="h5">МЕТОДЫ ДИАГНОСТИКИ:</MyText>}
                    {data.map((item: any, index: number) => (
                        <Box key={index} sx={{ textAlign: `${item.align}` }}>
                            {item.text.map((itemText: any, index: any) => (
                                <MyText variant="h6" sx={{ mt: 5, fontWeight: 'normal' }} key={index}>{itemText}</MyText>
                            ))}
                        </Box>
                    ))}
                </Grid>
                {showInfoText &&
                    <Grid item lg={12} xl={12} sm={12} md={12} xs={12}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            mt: 10,
                            textAlign: 'center'
                        }}
                    >
                        <GreenLine></GreenLine>
                        <MyText variant="h5" sx={{ color: '#245852', width: '90%' }} sm={18}>В рамках реализации Национального проекта «Здравоохранение»  разработан универсальный анкетный скрининг для выявления групп риска с учетом региональной специфики.</MyText>
                    </Grid>
                }
            </Grid>
        </MyContainer>
    )
}

export default ThreeScreen