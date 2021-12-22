import React, { useState } from 'react'

import { Box } from '@mui/material'
import Slider from 'react-slick'

import { CardUsefulLinks } from '../../components'
import CardUsefulLinksList from '../../Data/CardUsefulLinksList'

const CaruselUsefulLinks = () => {
    const [slidesToShow, setSlidesToShow] = useState(0)
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow,
        Infinity: true,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1290 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    return (
        <Box style={{ overflow: 'hidden', }}>
            <Slider {...settings} >
                {CardUsefulLinksList ? CardUsefulLinksList.map((item, index) => (
                    <Box style={{ margin: '0 auto' }} key={index}>
                        <CardUsefulLinks img={item.img} description={item.description} link={item.link} />
                    </Box>
                )) : ''}
            </Slider>
        </Box>
    )
}

export default CaruselUsefulLinks