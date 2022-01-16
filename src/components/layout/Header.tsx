import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, MenuItem, Typography, Box, Drawer, IconButton, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

const Root = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 110,
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
    color: 'white',
    textDecoration: 'none',
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(1),
        color: 'black',
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

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: 20,
    width: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const headerData: any = [
    {
        text: 'Вопрос&Ответ',
        link: '/faq'
    },
    {
        text: 'О проекте',
        link: '/about'
    },
    {
        text: 'Главная',
        link: '/'
    },
    {
        text: 'Контакты',
        link: '/contacts'
    },
    {
        text: 'Вoйти',
        link: '/login'
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
                        <CustomMenuItem>
                            {item.text}
                        </CustomMenuItem>
                    </Cuslink >
                ))}
            </ BoxLinks>
        )
    }
    const Logo = () => {
        return (
            <BoxLogo>
                <img style={{ width: 100 }} src={'/img/Element/logo2.png'} />
            </BoxLogo>
        )
    }
    const Desktop = () => {
        return (
            <Root>
                <Logo />
                <Links />
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
                    </Box>
                </Drawer>
            </Box>
        )
    }
    return (
        <AppBar position="static" sx={{ bgcolor: '#49DDC5' }}>
            <Container>
                <Toolbar>
                    {mobileView ? Mobile() : Desktop()}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header