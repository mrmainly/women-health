import React from 'react'

import { Box, MenuItem } from '@mui/material'
import { styled } from '@mui/system'

import { MyLink } from '..'

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
    width: 'max-content',
    marginTop: 100,
    height: 'max-content'
}))

const MenuProfile = () => {
    const menuList = [
        {
            label: 'Профиль',
            link: '/form-profile',
        },
        {
            label: 'Анкета',
            link: '/surveys',
        },
        {
            label: 'Результат',
            link: '/form-profile',
        },
        {
            label: 'Расписание',
            link: '/form-profile',
        },

    ]
    return (
        <Root>
            {menuList.map((item, index) => (
                <MenuItem key={index} sx={{ mt: 0.5 }}>
                    <MyLink href={item.link} sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal' }}>
                        {item.label}
                    </MyLink>
                </MenuItem>
            ))}
            <MenuItem sx={{ color: 'rgba(0, 0, 0, 0.5)', fontStyle: 'normal', mt: 0.5 }}>
                Выход
            </MenuItem>
        </Root>
    )
}

export default MenuProfile