import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'
import Slider from 'react-slick'

import CardPersonData from '../../Data/CardPerson'
import { CardPerson } from '../../components'

const CaruselPerson = () => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
    };
    return (
        <Box style={{ overflow: 'hidden', }}>
            <Slider {...settings} >
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