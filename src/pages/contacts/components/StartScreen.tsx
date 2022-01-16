import React from 'react'

import { MyContainer, MyText } from '../../../components'
import themeMain from '../../../theme'

import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

const Root = styled(Grid)(({ theme }) => ({
    width: '100%',
    padding: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: 10,
        marginTop: 50,
        marginBottom: 50
    },
}))

const Img = styled('img')(({ theme }) => ({
    width: '100%',
}))

const GridItemText = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingLeft: 20,
    [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        marginTop: 50,
    },
}))

const StartScreen = () => {
    return (
        <MyContainer wrapper={true}
            sx={{
                bgcolor: themeMain.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Root container>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Img src={'/img/Element/Group420.png'} />
                </Grid>
                <GridItemText item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <MyText variant="h4" sx={{ color: 'black' }}>Ыйытар төлөпүөннэрбит </MyText>
                    <MyText variant="h6" sx={{ mt: 5, mb: 5, color: '#313131', fontWeight: 500 }}>Балыыһалар, дьаһалта төлөпүөннэрэ, туһалаах информация</MyText>
                    <MyText variant="h2" sx={{ color: '#1B1642', fontWeight: 500 }}>8 962 731-18-00</MyText>
                </GridItemText>
            </Root>
        </MyContainer>
    )
}

export default StartScreen