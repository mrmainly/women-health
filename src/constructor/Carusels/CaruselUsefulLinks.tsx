import React, { useState } from 'react'

import { Box } from '@mui/material'
import Slider from 'react-slick'

import { CardUsefulLinks, ArrowPrev, ArrowNext } from '../../components'
import { TitleScreen } from '..'
import CardUsefulLinksList from '../../local_data/CardUsefulLinksList'
import { FormattedMessage } from "react-intl";

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
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />
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
            <TitleScreen variant="h4" sx={{ mb: 5 }} color="black" width={900} description={<FormattedMessage id="partners" />}><FormattedMessage id="usefulLinks" /></TitleScreen>
            {/* <Slider {...settings}>
                {CardUsefulLinksList ? CardUsefulLinksList.map((item, index) => (
                    <Box key={index}>
                        <CardUsefulLinks img={item.img} description={item.description} link={item.link} />
                    </Box>
                )) : ''}
            </Slider> */}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: 2,
                marginBottom: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {CardUsefulLinksList ? CardUsefulLinksList.map((item, index) => (
                    <Box key={index}>
                        <CardUsefulLinks img={item.img} description={item.description} link={item.link} />
                    </Box>
                )) : ''}
            </Box>
        </Box>
    )
}

export default CaruselUsefulLinks