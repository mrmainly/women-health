import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, MenuItem, Typography, Box, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

import { MyButton } from '../index'

const Root = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
}))
const BoxLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

}))
const BoxLogo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}))
const Cuslink = styled(Link)(({ theme }) => ({
    color: 'black',
    textDecoration: 'none',
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(1)
    },

}))
const BoxLogin = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('lg')]: {
        alignItems: 'end',
        height: '100%',
    },
}))

const headerData: any = [
    {
        text: 'Главная',
        link: '/'
    },
    {
        text: 'О проекте',
        link: '/about'
    },
    {
        text: 'Контакты',
        link: '/contact'
    },
    {
        text: 'Вопрос&Ответ',
        link: '/faq'
    },
]

const Header: React.FC = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const { mobileView, drawerOpen } = state;
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const Links = () => {
        return (
            <BoxLinks>
                {headerData.map((item: any) => (
                    <Cuslink to={item.link} key={item.link}>
                        <MenuItem>
                            {item.text}
                        </MenuItem>
                    </Cuslink >
                ))}
            </ BoxLinks>
        )
    }
    const Logo = () => {
        return (
            <BoxLogo>
                <img style={{ width: 40 }} src={'/img/Element/logo2.png'} />
                <Typography variant="body1" sx={{ ml: 1 }}>Ты не один онкосаха</Typography>
            </BoxLogo>
        )
    }
    const Login = () => {
        return (
            <BoxLogin>
                <MyButton sx={{ bgcolor: '#61D8C5' }}>Войти</MyButton>
                <MyButton sx={{ bgcolor: '#01996D', ml: 1 }}>Регистрация</MyButton>
            </BoxLogin>
        )
    }

    const Desktop = () => {
        return (
            <Root>
                <Links />
                <Logo />
                <Login />
            </Root>
        )
    }
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box style={{
                        width: 250, padding: 15, display: 'flex', flexDirection: 'column',
                        height: '100%'
                    }}>
                        <Links />
                        <Login />
                    </Box>
                </Drawer>
            </Box>
        )
    }
    return (
        <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
            <Toolbar>
                {mobileView ? Mobile() : Desktop()}
            </Toolbar>
        </AppBar>
    )
}

export default Header