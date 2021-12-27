import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'
import Slider from 'react-slick'

import CardArray from '../../../Data/CardPerson'
import { MyContainer, CardPerson } from '../../../components'
import { CaruselPerson } from '../../../constructor'

const SixCaruselScreen = () => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
    };
    return (
        <MyContainer wrapper={false} minHeight={600} sx={{ display: 'flex', alignItems: 'center', mb: 20 }}>
            <Box style={{ overflow: 'hidden', }}>
                <CaruselPerson />
            </Box>
        </MyContainer>
    )
}

export default SixCaruselScreen