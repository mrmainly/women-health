import React from 'react'

import { MyContainer, MyText } from '../../../components'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

const TextBox = styled(Box)(({ theme }) => ({
    width: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const FaqPageHeader = () => {
    return (
        <MyContainer wrapper={true}
            sx={{
                bgcolor: '#245852',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center'
            }}
            minHeight={400}
        >
            <MyText variant="h5" >рубрика</MyText>
            <MyText variant="h4" sx={{ mt: 2, mb: 2 }}>Вопрос ответ</MyText>
            <TextBox>
                <MyText variant="h6" sx={{ fontWeight: 'normal' }}>Здесь мы решили написать ответы на популярные вопросы, связанные с работой сервиса и темой скрининга.</MyText>
            </TextBox>
        </MyContainer>
    )
}

export default FaqPageHeader