import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, MenuItem } from '@mui/material'
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
    const navigate = useNavigate()
    return (
        <CardRoot>
            <img src={`/img/Element/${img}.png`} style={{ height: 200 }} />
            <MyText variant="body1" sx={{ height: 50, fontWeight: 500, mt: 1 }}>{description}</MyText>
            <MenuItem sx={{ color: '#EB5757', }} onClick={() => {
                navigate(link)
            }}>
                Перейти
            </MenuItem>
        </CardRoot>
    )
}

export default CardUsefulLinks