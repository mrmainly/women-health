import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, MenuItem, Box, Drawer, IconButton, Container, Select } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/system'

const Root = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minHeight: 80,
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
    marginRight: 2,
    [theme.breakpoints.down('lg')]: {
        marginLeft: 0,
        marginRight: 0,
    },
}))

const Cuslink = styled(Link)(({ theme }) => ({
    color: '#FF6CA1',
    textDecoration: 'none',
    marginLeft: 1,
    marginRight: 1,
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(1),
    },

}))

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    fontWeight: 600
}))

const Header: React.FC = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const navigate = useNavigate()
    // const cookieVar = cookie.get('jwttoken')
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
            text: 'Вопрос/Ответ',
            link: '/faq'
        },
        {
            text: 'Контакты',
            link: '/contacts'
        },
    ]

    const Links = () => {
        return (
            <BoxLinks>
                {headerData.map((item: any) => (
                    <Cuslink to={item.link} key={item.link}>
                        <CustomMenuItem>
                            {item.text}
                        </CustomMenuItem>
                    </Cuslink>
                ))}
            </ BoxLinks>
        )
    }
    const Logo = () => {
        return (
            <BoxLogo>
                <MenuItem onClick={() => navigate('/')}>
                    <img src={'/img/Element/pho1.png'} style={{ width: 60 }} />
                </MenuItem>
            </BoxLogo>
        )
    }
    const Desktop = () => {
        return (
            <Root>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Logo />
                    <Links />
                </div>
                <Cuslink to='/login'>
                    <CustomMenuItem >
                        Личный кабинет
                    </CustomMenuItem >
                </Cuslink>
            </Root>
        )
    }
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', }}>
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
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box style={{
                        width: 250, padding: 15, display: 'flex', flexDirection: 'column',
                        height: '100%', alignItems: 'center'
                    }}>
                        <Logo />
                        <Links />
                    </Box>
                </Drawer>
            </Box>
        )
    }
    return (
        <AppBar position="static" sx={{ bgcolor: 'white' }}>
            <Container sx={{ height: '100%' }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    {mobileView ? Mobile() : Desktop()}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header