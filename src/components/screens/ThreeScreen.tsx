import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'

import { MyContainer, MyText, MyButton } from '..'

const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
}))


interface ThreeScreenProps {
    data: any,
    showInfoText: boolean
}

const ThreeScreen: React.FC<ThreeScreenProps> = ({ data, showInfoText }) => {
    return (
        <MyContainer wrapper={false}>
            {/* <TitleBox>
                <MyText variant="h6">Кутталлаах бөлөххө киирэри билэргэ портаалга бэлиэтэн (регистрация) уонна тургутар анкетаны толор</MyText>
                <MyButton color="error" sx={{ mt: 2 }}>Анкеталары көрүү</MyButton>
            </TitleBox> */}
            <Grid container sx={{ mt: 10 }}>
                <Grid item lg={6} xl={6} sm={12} md={6} xs={12}>
                    <img src={'/img/Element/element.png'} style={{ width: '100%' }} />
                </Grid>
                <Grid item lg={6} xl={6} sm={12} md={6} xs={12} sx={{ pl: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {data[0].align == 'center' ? '' : <MyText variant="h5">ДИАГНОСТИКА КӨРҮҤНЭРЭ</MyText>}
                    {data.map((item: any, index: number) => (
                        <Box key={index} sx={{ textAlign: `${item.align}` }}>
                            {item.text.map((itemText: any, index: any) => (
                                <MyText variant="h6" sx={{ mt: 5, fontWeight: 'normal' }} key={index}>{itemText}</MyText>
                            ))}
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </MyContainer>
    )
}

export default ThreeScreen