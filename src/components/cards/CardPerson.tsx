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
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRaduis: 11,
    backgroundColor: '#FCFCFC',
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down('md')]: {
        paddingTop: 20,
        paddingBottom: 20
    },
}))

const MainCardItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        paddingTop: 10,
    },
}))

const InfoImg = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: 300,
    marginLeft: '-40px',
    [theme.breakpoints.down('md')]: {
        opacity: 0
    },
}))

const BoxText = styled(Box)(({ theme }) => ({
    marginTop: 40,
    marginBottom: 40,
    [theme.breakpoints.down('md')]: {
        marginTop: 10,
        marginBottom: 10
    },
}))

const CardPerson: React.FC<CardPersonProps> = ({ img, description, infoImg, tag, name }) => {
    return (
        <MainCardBox>
            <Grid container>
                <Grid item lg={6} xl={6} md={7}>
                    <img src={img} style={{ width: '100%' }} />
                    <InfoImg src={infoImg} />
                </Grid>
                <MainCardItem item lg={6} xl={6} md={5}>
                    <MyText variant="h6">{tag}</MyText>
                    <BoxText>
                        <MyText variant="h3" sm={25} sx={{ color: '#01996D', fontWeight: 'bold' }}>{name}</MyText>
                    </BoxText>
                    <MyText variant="body1">{description}</MyText>
                </MainCardItem>
            </Grid>
        </MainCardBox>
    )
}

export default CardPerson