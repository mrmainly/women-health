import React from 'react'
import { Grid, Box, Container } from '@mui/material'
import { styled } from '@mui/system'

import { MyText, MyContainer } from '../../../components'
import { PageHeaderText } from '../../../constructor'
import { FormattedMessage } from "react-intl";

const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#245852',
    color: 'white',
    width: '90%',
    borderEndEndRadius: 50,
    borderEndStartRadius: 50,
    minHeight: 900,
    [theme.breakpoints.down('lg')]: {
        width: '100%'
    },
}))

const TextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 80
}))

const ImgBox = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center'
    },
}))

const BoxCard = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    minHeight: 200,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        marginTop: 10,
        marginBottom: 10
    },
}))

const StartScreen = () => {
    const data = [
        {
            number: '48.8 лет',
            description: 'Средний возраст наступления менопаузы в мире'
        },
        {
            number: '49-51 год',
            description: 'Средний возраст наступления менопаузы в РФ'
        },
        {
            number: '7.4 года',
            description: 'Средняя продолжительность приливов'
        },
        {
            number: '75%',
            description: 'Симптомы климакса беспокоят женщин в возрасте от 45-55 лет'
        }
    ]

    return (
        <MyContainer wrapper={true} sx={{
            background: `url(${"/img/Background/Rectangle471.png"})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            color: 'white'
        }}
            minHeight={800}
            lg={850}
            md={1200}
            sm={1600}
        >
            <TextBox>
                <PageHeaderText
                    title={<FormattedMessage id="our_mission_about_page" />}
                    titleSize="h2"
                    tag={<FormattedMessage id="our_mission_about_tag_page" />}
                    description="Скрининг климактерического синдрома-при наличии группы высокого риска Вам предлагается сдать гормоны, узи органов малого таза, молочных желез, денситометрия и пройти осмотр врача гинеколога-эндокринолога, при необходимости для правильной оценки состояния нужны дополнительно консультации других специалистов."
                    descriptionColor="white"
                    tagColor="white"
                />
                <Grid container style={{ marginTop: 80 }}>
                    {data.map(item => (
                        <Grid item lg={3} xl={3} md={3} sm={6} xs={12} key={item.number}>
                            <BoxCard>
                                <MyText variant="h4" sx={{ fontWeight: 600 }}>{item.number}</MyText>
                                <MyText variant="body1" sx={{ width: '95%' }}>{item.description}</MyText>
                            </BoxCard>
                        </Grid>
                    ))}
                </Grid>
            </TextBox>
        </MyContainer>
    )
}

export default StartScreen