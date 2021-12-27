import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'
import Slider from 'react-slick'

import CardArray from '../../../Data/CardPerson'
import { MyContainer, CardPerson } from '../../../components'

const TwoCaruselScreen = () => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
    };
    return (
        <MyContainer wrapper={false} minHeight={600} sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
            <Box style={{ overflow: 'hidden', }}>
                <Slider {...settings} >
                    {CardArray ? CardArray.map((item, index) => (
                        <Box style={{ margin: '0 auto' }} key={index}>
                            <CardPerson img={item.img} description={item.description} infoImg={item.infoImg} tag={item.tag} name={item.name} />
                        </Box>
                    )) : ''}
                </Slider>
            </Box>
        </MyContainer>
    )
}

export default TwoCaruselScreen