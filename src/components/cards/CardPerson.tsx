import React from 'react'

import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '..'
import { CardPersonProps } from '../../interface'

const MainCardBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 550,
    boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.15)',
    borderRaduis: 11,
    backgroundColor: '#FCFCFC',
    borderTopLeftRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.down('md')]: {
        width: 440,
        margin: '0 auto',
    },
    [theme.breakpoints.down('sm')]: {
        width: 260,
    },
}))

const MainCardItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: 20,
    },
}))

const BoxText = styled(Box)(({ theme }) => ({
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
        marginTop: 10,
        marginBottom: 10
    },
}))

const Img = styled('img')(({ theme }) => ({
    width: '100%',
    height: 550,
    borderTopLeftRadius: 25,
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
        height: 300
    },
    [theme.breakpoints.down('sm')]: {
        width: 260
    },
}))


const CardPerson: React.FC<CardPersonProps> = ({ img, description, tag, name }) => {
    return (
        <MainCardBox>
            <Grid container sx={{ minHeight: 550 }}>
                <Grid item lg={6} xl={6} md={6} sm={12}>
                    <Img src={img} />
                </Grid>
                <MainCardItem item lg={6} xl={6} md={6} sm={12}>
                    <MyText variant="h5" sm={25} sx={{ color: '#EB5757' }}>{name}</MyText>
                    <BoxText>
                        <MyText variant="h6">{tag}</MyText>
                    </BoxText>
                    <MyText variant="h6">{description}</MyText>
                </MainCardItem>
            </Grid>
        </MainCardBox>
    )
}

export default CardPerson