import React from 'react'

import { Box, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'

import { MyContainer } from '../../../components'
import { FormattedMessage } from "react-intl";

const Title = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        textAlign: 'center'
    },
}))

const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

const GridItemShow = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '-100px',
        marginTop: '-50px'
    },
}))

const GridItemColumn = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

const Img = styled('img')(({ theme }) => ({
    width: '95%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const StartScreen = () => {
    return (
        <MyContainer wrapper={true} sx={{
            background: `url(${"/img/Background/BG1.png"})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            minHeight: 804,
            pb: 5,
            pt: 10
        }} sm={700} md={600} lg={700}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Title variant="h4">
                    <FormattedMessage id={'index_page_title'} />
                </Title>
                <Grid container sx={{ mt: 5 }}>
                    <GridItemShow item lg={3} xl={3} md={3} sm={3} xs={12}>
                        <img style={{ width: '120%', marginTop: 30 }} src="/img/Element/Frame1.png" />
                    </GridItemShow>
                    <GridItemColumn item lg={3} xl={3} md={3} sm={3} xs={12}>
                        <Img src="/img/Element/Frame2.png" />
                        <Img sx={{ mt: 1 }} src="/img/Element/Frame3.png" />
                    </GridItemColumn>
                    <GridItem item lg={3} xl={3} md={3} sm={3} xs={12}>
                        <Img src="/img/Element/Frame4.png" />
                    </GridItem>
                    <GridItem item lg={3} xl={3} md={3} sm={3} xs={12}>
                        <Img src="/img/Element/Frame5.png" />
                    </GridItem>
                </Grid>
            </Box>
        </MyContainer>
    )
}

export default StartScreen