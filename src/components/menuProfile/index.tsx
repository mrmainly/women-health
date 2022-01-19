import React from 'react'

import { Box, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import cookie from 'js-cookie'

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
            label: 'Тус хос',
            link: '/form-profile',
        },
        {
            label: 'Анкеталар',
            link: '/surveys',
        },
        {
            label: 'Түмүктэр',
            link: '/form-profile',
        },
        {
            label: 'Араспысаанньа',
            link: '/form-profile',
        },

    ]
    return (
        <Root>
            {menuList.map((item, index) => (
                <MyLink href={item.link} sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal' }}>
                    <MenuItem key={index} sx={{ mt: 0.5 }}>
                        {item.label}
                    </MenuItem>
                </MyLink>
            ))}
            <MenuItem sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal', mt: 0.5 }} onClick={() => { cookie.remove('jwttoken') }}>
                <MyLink href="/" sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal' }}>
                    Тахсыы
                </MyLink>
            </MenuItem>
        </Root>
    )
}

export default MenuProfile