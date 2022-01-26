import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'
import { FormattedMessage } from "react-intl";

import { MyContainer, MyText, MyButton } from '..'

interface FourScreenProps {
    data?: any,
}

const ImgGrid = styled('img')(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        marginTop: 40,
        width: 300
    },
}))

const GridItem = styled(Grid)(({ theme }) => ({
    paddingLeft: 2,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    },
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

const FourScreen: React.FC<FourScreenProps> = ({ data }) => {
    return (
        <MyContainer wrapper={false}>
            <Grid container sx={{ mt: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item lg={6} xl={6} sm={6} md={6} xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ImgGrid src={'/img/Element/radiotherapy1.png'} />
                </Grid>
                <Grid item lg={12} xl={12} sm={12} md={12} xs={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        mt: 3,
                        textAlign: 'center'
                    }}
                >
                    <MyText variant="h6" sx={{ color: 'black', width: '80%' }} sm={12}><FormattedMessage id='universal_screening_lung_cancer' /></MyText>
                </Grid>
                <GridItem item lg={12} xl={12} sm={12} md={12} xs={12}>
                    {data ? data.map((item: any, index: number) => (
                        <Box key={index}>
                            {item.type == 'column' ?
                                <Box sx={{ mt: 5, ml: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'start' }}>
                                    <MyText variant="h5" lg={20} sx={{ mt: 3 }}>{item.title}</MyText>
                                    {item.text.map((itemElem: any, index: number) => (
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }} key={index}>
                                            <img src="/img/Element/Subtract.png" />
                                            <MyText variant="h6" sx={{ fontWeight: 'normal', ml: 1 }} sm={16}>{itemElem}</MyText>
                                        </Box>
                                    ))}
                                </Box> :
                                <Box>
                                    <MyText variant="h5" lg={20} sx={{ mt: 3 }}>{item.title}</MyText>
                                    {item.text.map((itemText: any, index: any) => (
                                        <MyText variant="h6" lg={16} sx={{ mt: 2, fontWeight: 'normal' }} key={index}>{itemText}</MyText>
                                    ))}
                                </Box>
                            }
                        </Box>
                    )) : ''}
                </GridItem>
            </Grid>
        </MyContainer>
    )
}

export default FourScreen