import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, MenuItem } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '..'
import { CardUsefulLinksProps } from '../../interface'
import { FormattedMessage } from "react-intl";

const CardRoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: 250,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0,
    },
}))

const CardUsefulLinks: React.FC<CardUsefulLinksProps> = ({ img, link, description }) => {
    const navigate = useNavigate()
    return (
        <CardRoot>
            <img src={`/img/Element/${img}.png`} style={{ height: 200 }} />
            <MyText variant="body1" sx={{ height: 70, fontWeight: 500, mt: 1 }}>{description}</MyText>
            <MenuItem sx={{ color: '#EB5757', }} onClick={() => {
                navigate(link)
            }}>
                <FormattedMessage id="go_to" />
            </MenuItem>
        </CardRoot>
    )
}

export default CardUsefulLinks