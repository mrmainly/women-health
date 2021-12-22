import React, { useState } from 'react'

import { Box } from '@mui/material'
import Slider from 'react-slick'

import { CardSurveyCarusel } from '../../components'
import CardSurveyCaruselList from '../../Data/CardSurveyCaruselList'

const CaruselSurvey = () => {
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
            <Slider {...settings}>
                {CardSurveyCaruselList ? CardSurveyCaruselList.map((item, index) => (
                    <CardSurveyCarusel key={index} img={item.img} label={item.label} link={item.link} />
                )) : ''}
            </Slider>
        </Box>
    )
}

export default CaruselSurvey