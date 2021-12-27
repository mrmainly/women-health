import React from 'react'

import { MyContainer, MyText } from '../../../components'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

const Root = styled(Grid)(({ theme }) => ({
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 15,
    boxShadow: '1px 2px 15px rgba(0, 0, 0, 0.25)',
    padding: 50,
    [theme.breakpoints.down('md')]: {
        padding: 20,
        marginTop: 50,
        marginBottom: 50
    },
}))

const Img = styled('img')(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        width: 300,
    },
}))

const GridItemText = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
})

const Span = styled('span')({
    marginLeft: 20,
    color: '#0B806B',
    fontSize: 25,
    fontFamily: 'serif'
})


const StartScreen = () => {
    return (
        <MyContainer wrapper={true}
            sx={{
                bgcolor: '#245852',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Root container>
                <GridItemText item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <MyText variant="h4" sx={{ color: '#245852' }}>Справочные телефоны: </MyText>
                    <MyText variant="h6" sx={{ mt: 5, mb: 5, color: '#313131', fontWeight: 500 }}>Телефоны медецинских учреждений, горячей линиии, администрации, полезная информация </MyText>
                    <MyText variant="h6">ПН-ПТ :<Span>08:00-19:00</Span></MyText>
                    <MyText variant="h6">ВС-СБ:<Span>Выходные</Span></MyText>
                </GridItemText>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Img src={'/img/Element/undraw.png'} />
                </Grid>
            </Root>
        </MyContainer>
    )
}

export default StartScreen