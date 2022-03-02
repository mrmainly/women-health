import React from 'react'

import { styled } from '@mui/system'
import { Grid, Box } from '@mui/material'

import { MyText, MyContainer } from '..'
import { TextInfoScreenProps } from '../../interface'

const YellowLine = styled(Box)({
    height: 5,
    width: '70%',
    background: '#FFC267',
})

const TitleBox = styled(Box)({
    color: 'black',
    marginTop: 30,
})


const TextInfoScreen: React.FC<TextInfoScreenProps> = ({ data, dangerText }) => {
    return (
        <MyContainer
            wrapper={false}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'start',
                mt: 5,
                mb: 10
            }}
        >
            {/* <YellowLine></YellowLine> */}
            {data.map((item: any, index: number) => (
                <Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                    {item.title ?
                        <TitleBox>
                            <MyText variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</MyText>
                        </TitleBox>
                        : ''}
                    {item.type == 'column' ?
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'start' }}>
                            {item.elem.map((itemElem: any, index: number) => (
                                <ul style={{ display: 'flex', alignItems: 'center' }} key={index}>
                                    {/* <img src="/img/Element/Subtract.png" /> */}
                                    <li><MyText variant="body1" sx={{ fontWeight: 'normal', marginTop: '-20px' }} sm={16}>{itemElem}</MyText></li>
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
                                            mt: 2,
                                            color: '#1B1642',
                                            fontWeight: 'normal',
                                        }}>{itemElem}</MyText>
                                </Box>
                            ))}
                        </Box>
                    }
                </Box>
            ))}
            {dangerText ? <MyText sx={{ mt: 7, color: '#EB5757' }} variant="h4">{dangerText}</MyText> : ''}
        </MyContainer>
    )
}

export default TextInfoScreen