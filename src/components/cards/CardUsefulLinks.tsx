import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '..'
import { CardUsefulLinksProps } from '../../interface'

const CardRoot = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '80%',
    margin: '0 auto',
    minHeight: 250,
})

const CardUsefulLinks: React.FC<CardUsefulLinksProps> = ({ img, link, description }) => {
    return (
        <CardRoot>
            <img src={`/img/Element/${img}.png`} style={{ height: 200 }} />
            <MyText variant="body2">{description}</MyText>
        </CardRoot>
    )
}

export default CardUsefulLinks