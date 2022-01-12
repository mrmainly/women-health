import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'

import { MyContainer, MyText, MyButton } from '..'

interface FourScreenProps {
    data: any
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

const FourScreen: React.FC<FourScreenProps> = ({ data }) => {
    return (
        <MyContainer wrapper={false} minHeight={500}>
            <Grid container sx={{ mt: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GridItem item lg={8} xl={8} sm={12} md={8} xs={12}>
                    {data.map((item: any, index: number) => (
                        <Box key={index}>
                            <MyText variant="h5" lg={20} sx={{ mt: 3 }}>{item.title}</MyText>
                            {item.text.map((itemText: any, index: any) => (
                                <MyText variant="h6" lg={16} sx={{ mt: 2, fontWeight: 'normal' }} key={index}>{itemText}</MyText>
                            ))}
                        </Box>
                    ))}
                </GridItem>
                <Grid item lg={4} xl={4} sm={6} md={4} xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ImgGrid src={'/img/Element/radiotherapy1.png'} />
                </Grid>
            </Grid>
        </MyContainer>
    )
}

export default FourScreen