import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'

import { MyContainer, MyText, MyButton } from '..'
import { FormattedMessage } from "react-intl";

const TitleBox = styled(Box)(({ theme }) => ({
    marginTop: 30
}))

const Img = styled('img')(({ theme }) => ({
    width: 600,
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
            <Grid container sx={{ mt: 5 }}>
                <Grid item lg={12} xl={12} sm={12} md={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Img src={'/img/Element/element.png'} />
                </Grid>
                <Grid item lg={12} xl={12} sm={12} md={6} xs={12} sx={{ pl: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', pt: 5 }}>
                    {data[0].align == 'center' ? '' : <MyText variant="h4" sx={{ margin: '0 auto', fontWeight: 500 }}><FormattedMessage id="diagnostic_methods" /></MyText>}
                    {data.map((item: any, index: number) => (
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                            {item.title ?
                                <TitleBox>
                                    <MyText variant="h6" sx={{ mb: 2, fontWeight: 'normal' }}>{item.title}</MyText>
                                </TitleBox>
                                : ''}
                            {item.type == 'column' ?
                                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'start' }}>
                                    {item.elem.map((itemElem: any, index: number) => (
                                        <ul style={{ display: 'flex', alignItems: 'center' }} key={index}>
                                            {/* <img src="/img/Element/Subtract.png" /> */}
                                            <li><MyText variant="h6" sx={{ fontWeight: 'normal', marginTop: '-20px' }} sm={16}>{itemElem}</MyText></li>
                                        </ul>
                                    ))}
                                </Box>
                                :
                                <Box>
                                    {item.elem.map((itemElem: any, index: number) => (
                                        <Box key={index}>
                                            <MyText
                                                variant="h6"
                                                sx={{
                                                    color: '#1B1642',
                                                    fontWeight: 'normal',
                                                    mt: 2
                                                }}
                                            >
                                                {itemElem}
                                            </MyText>
                                        </Box>
                                    ))}
                                </Box>
                            }
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </MyContainer>
    )
}

export default ThreeScreen