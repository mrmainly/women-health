import React from 'react'

import { styled } from '@mui/system'
import { Grid, Box } from '@mui/material'

import { MyText, MyContainer } from '..'
import { TextInfoScreenProps } from '../../interface'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const YellowLine = styled(Box)({
    height: 5,
    width: '70%',
    background: '#FFC267',
})

const TitleBox = styled(Box)({
    padding: 10,
    background: '#3FBCA6',
    borderRadius: 5,
    color: 'white',
    width: 'max-content',
    marginTop: 50,
    textAlign: 'center',
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
                mt: 10,
                mb: 10
            }}
        >
            {/* <YellowLine></YellowLine> */}
            {data.map((item: any, index: number) => (
                <Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                    {item.title ?
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <TitleBox>
                                <MyText variant="h5">{item.title}</MyText>
                            </TitleBox>
                        </div>
                        : ''}
                    {item.type == 'column' ?
                        <Box sx={{ mt: 5, ml: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'start' }}>
                            {item.elem.map((itemElem: any, index: number) => (
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }} key={index}>
                                    <img src="/img/Element/Subtract.png" />
                                    <MyText variant="h6" sx={{ fontWeight: 'normal', ml: 1 }} sm={16}>{itemElem}</MyText>
                                </Box>
                            ))}
                        </Box>
                        :
                        <Box>
                            {item.elem.map((itemElem: any, index: number) => (
                                <Box key={index}>
                                    <MyText
                                        variant="h6"
                                        sx={{
                                            mt: 5,
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