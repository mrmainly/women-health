import React from 'react'

import { Box } from '@mui/material'
import Slider from 'react-slick'

import CardPersonData from '../../Data/CardPerson'
import { CardPerson, ArrowPrev, ArrowNext } from '../../components'

const CaruselPerson = () => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: <ArrowNext style={{ right: '-20px' }} />,
        prevArrow: <ArrowPrev style={{ left: '-20px' }} />,
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