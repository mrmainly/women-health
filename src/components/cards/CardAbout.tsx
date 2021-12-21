import React from 'react'

import { styled } from '@mui/system'
import { Card, Box } from '@mui/material'

import { MyText } from '..'
import { CardAboutProps } from '../../interface'

const CardAbout: React.FC<CardAboutProps> = ({ title, body, id, bgcolor }) => {
    const CardRoot = styled(Card)({
        minHeight: 400,
        display: 'flex',
        backgroundColor: bgcolor,
        width: 330,
        padding: 15,
        margin: 10,
        color: 'white',
        flexDirection: 'column'
    })
    return (
        <CardRoot>
            <Box style={{ display: 'flex', height: 80 }}>
                <MyText variant="h4">{id}</MyText>
                <MyText variant="body2">{title}</MyText>
            </Box>
            <MyText variant="body2" sx={{ mt: 5 }}>{body}</MyText>
        </CardRoot>
    )
}

export default CardAbout