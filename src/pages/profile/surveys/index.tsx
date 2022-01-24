import React, { useEffect, useState } from 'react'

import { MenuProfile, MyContainer, CardSurveysProfile, MyText } from '../../../components'

import { Box, Grid, Typography, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'

import Api from '../../../utils/api'
import { SurveyProps } from '../../../interface'

const DataSurveys = [
    {
        img: 'liver',
        label: 'Быары чинчийии',
        link: '/liver-form'
    },
    {
        img: 'gut',
        label: 'Суон оһоҕоһу чинчийии.',
        link: '/gut-form'
    },
    {
        img: 'breath',
        label: 'Тыҥаны чинчийии',
        link: '/breath-form'
    },
    {
        img: 'breast',
        label: 'Эмиийи чинчийии',
        link: '/breast-form'
    },
    {
        img: 'cervix',
        label: 'Киэли хапчаҕайын чинчийии',
        link: '/cervix-form'
    },
    {
        img: 'prostata',
        label: 'Самах былчархайын чинчийии',
        link: '/prostate-form'
    }
]

const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
}))

const Surveys = () => {
    const [data, setData] = useState<SurveyProps[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        Api.getSurveysTypes().then((res) => {
            const result = res.data.results.map((result: any) => {
                return {
                    'research': result.research,
                    'slug': result.slug,
                    'id': result.id,
                }
            })
            setData(result)
            setLoading(false)
        })
    }, [])
    return (
        <MyContainer wrapper={false}>
            <BoxWrapper>
                <MenuProfile />
                {loading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 15 }}>
                        <CircularProgress />
                    </Box> :
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10, ml: 2, width: '100%' }}>
                        <MyText variant="h5">Анкеталар</MyText>
                        <Grid container>
                            {data !== null ? data.map((item, index) => (
                                <Grid item lg={4} xl={4} md={6} sm={6} xs={12} key={index}>
                                    <CardSurveysProfile
                                        label={item.research.name}
                                        img={item.research.image}
                                        link={item.slug}
                                        id={item.id}
                                    />
                                </Grid>
                            )) : 'asddas'
                            }
                        </Grid>
                    </Box>
                }
            </BoxWrapper>
        </MyContainer>
    )
}

export default Surveys