import React from 'react'

import { Box, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import Slider from 'react-slick'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CardPersonData from '../../Data/CardPerson'
import { CardPerson } from '../../components'
import { ArrowPrevProps } from '../../interface';
import { ArrowNextProps } from '../../interface';

const ArrowNextItem = styled(Box)(({ theme }) => ({
    height: 60,
    width: 60,
    position: "absolute",
    top: '50%',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    right: '-35px',
    backgroundColor: '#EB5757',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        right: 0
    },
}))

const ArrowPrevItem = styled(Box)(({ theme }) => ({
    height: 60,
    width: 60,
    position: "absolute",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    top: '50%',
    zIndex: 900,
    left: '-35px',
    cursor: 'pointer',
    backgroundColor: '#EB5757',
    [theme.breakpoints.down('md')]: {
        left: 0
    },
}))

const ArrowNext: React.FC<ArrowNextProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <ArrowNextItem className="slick-arrow" onClick={onClick} >
            <ArrowForwardIcon fontSize={'large'} htmlColor={'white'} />
        </ArrowNextItem>
    )
}

const ArrowPrev: React.FC<ArrowPrevProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <ArrowPrevItem className="slick-arrow" onClick={onClick} >
            <ArrowBackIcon fontSize={'large'} htmlColor={'white'} />
        </ArrowPrevItem>
    )
}

const CaruselPerson = () => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <Box >
            <Slider {...settings}>
                {CardPersonData ? CardPersonData.map((item, index) => (
                    <Box sx={{ pt: 2, pb: 2 }} key={index}>
                        <CardPerson img={item.img} description={item.description} infoImg={item.infoImg} tag={item.tag} name={item.name} />
                    </Box>
                )) : ''
                }
            </Slider >
        </Box >
    )
}

export default CaruselPerson