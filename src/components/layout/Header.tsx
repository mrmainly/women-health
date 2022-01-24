import React, {useState, useEffect, useContext} from 'react'

import {AppBar, Toolbar, MenuItem, Typography, Box, Drawer, IconButton, Container} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import {styled} from '@mui/system'
import cookie from 'js-cookie'
import {LOCALES} from "../../i18n/locales";
import {LanguageContext} from "../../store";


const Root = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 110,
}))
const BoxLinks = styled(Box)(({theme}) => ({
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

}))
const BoxLogo = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '-60px',
    [theme.breakpoints.down('md')]: {
        marginLeft: 0
    },
}))

const Cuslink = styled(Link)(({theme}) => ({
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
const BoxLogin = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('lg')]: {
        alignItems: 'end',
        height: '100%',
    },
}))

const CustomMenuItem = styled(MenuItem)(({theme}) => ({
    fontSize: 20,
    minWidth: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const headerData: any = [
    {
        text: 'Ыйытыы/хоруй',
        link: '/faq'
    },
    {
        text: 'Бырайыак туһунан',
        link: '/about'
    },
    {
        text: 'Сүрүн',
        link: '/'
    },
    {
        text: 'Аадырыс',
        link: '/contacts'
    },
    {
        text: 'Тус хос',
        link: cookie.get('jwttoken') ? 'form-profile' : 'login'
    },
]

const Header: React.FC = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const {mobileView, drawerOpen} = state;

    const languages = [
        {name: 'Русский', code: LOCALES.RUSSIAN},
        {name: 'Якутский', code: LOCALES.SAKHA},
    ]
    const {currentLocale, changeLocale} = useContext(LanguageContext)

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
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
                    </Cuslink>
                ))}
            </ BoxLinks>
        )
    }
    const Logo = () => {
        return (
            <BoxLogo>
                <img style={{width: 100}} src={'/img/Element/logo2.png'}/>
                <div className='switcher'>
                    Выбор языка <select onChange={(e) => {
                    changeLocale(e.target.value)
                }}>
                    {languages.map(({name, code}) => (
                        <option key={name} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
                </div>

            </BoxLogo>
        )
    }
    const Desktop = () => {
        return (
            <Root>
                <Logo/>
                <Links/>
            </Root>
        )
    }
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));
        return (
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{color: '#1B1642'}}
                >
                    <MenuIcon/>
                </IconButton>
                <Logo/>
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
                        <Links/>
                    </Box>
                </Drawer>
            </Box>
        )
    }
    return (
        <AppBar position="static" sx={{bgcolor: '#49DDC5'}}>
            <Container>
                <Toolbar>
                    {mobileView ? Mobile() : Desktop()}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header