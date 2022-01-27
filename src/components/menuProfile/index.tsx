import React from 'react'

import { Box, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import cookie from 'js-cookie'
import { FormattedMessage } from "react-intl";

import { MyLink } from '..'


const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
    width: 'max-content',
    marginTop: 100,
    height: 'max-content',
    [theme.breakpoints.down('sm')]: {
        width: '90%'
    },
}))

const MenuProfile = () => {
    const menuList = [
        {
            label: <FormattedMessage id="profile_menu" />,
            link: '/form-profile',
        },
        {
            label: <FormattedMessage id="surveys_main_page" />,
            link: '/surveys',
        },
        {
            label: 'Түмүктэр',
            link: '/results',
        },
        {
            label: 'Араспысаанньа',
            link: '/schedule',
        },

    ]
    return (
        <Root>
            {menuList.map((item, index) => (
                <MyLink key={index} href={item.link} sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal' }}>
                    <MenuItem sx={{ mt: 0.5 }}>
                        {item.label}
                    </MenuItem>
                </MyLink>
            ))}
            <MyLink href="/" sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal' }}>
                <MenuItem sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal', mt: 0.5 }} onClick={() => { cookie.remove('jwttoken') }}>
                    Тахсыы
                </MenuItem>
            </MyLink>
        </Root>
    )
}

export default MenuProfile