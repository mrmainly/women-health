import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'

import { MyContainer, MyText } from '..'

const TopBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white'
}))

const Footer: React.FC = () => {
    return (
        <MyContainer sx={{ bgcolor: '#245852', padding: 2 }} wrapper={true} minHeight={300}>
            <TopBox>
                <Box>

                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <MyText variant="h5">узнавайте <span style={{ color: 'orange' }}>новости</span> о проекте<br /> первыми. </MyText>
                    <MyText variant="body1">подпишитесь на наши уведомления.</MyText>
                </Box>
                <Box>

                </Box>
            </TopBox>
        </MyContainer>
    )
}

export default Footer