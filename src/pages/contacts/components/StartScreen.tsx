import React from 'react'

import { MyContainer, MyText } from '../../../components'
import themeMain from '../../../theme'
import { FormattedMessage } from "react-intl";

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
                background: 'radial-gradient(71.59% 70.87% at 76.67% 104.96%, rgba(0, 94, 43, 0.4) 0%, rgba(0, 99, 45, 0.4) 0.01%, rgba(0, 169, 78, 0) 100%), linear-gradient(170.76deg, rgba(10, 116, 1, 0.4) -0.06%, rgba(192, 173, 0, 0.088) 95.53%), #76C38B;',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Root container>
                <GridItemText item lg={6} xl={6} md={6} sm={12} xs={12} sx={{ color: 'white' }}>
                    <MyText variant="h4" ><FormattedMessage id="contacts_reference_phones" /></MyText>
                    <MyText variant="h6" sx={{ mt: 5, mb: 5, fontWeight: 500 }}><FormattedMessage id="contacts_reference_phones_description" /></MyText>
                    <MyText variant="h2" sx={{ fontWeight: 500 }}>8-800-100-14-03</MyText>
                </GridItemText>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Img src={'/img/Element/Group2435.png'} />
                </Grid>
            </Root>
        </MyContainer>
    )
}

export default StartScreen