import React from 'react'

import { MyContainer, CardPerson, MyText } from '../../../components'
import { CaruselPerson } from '../../../constructor';
import { FormattedMessage } from "react-intl";

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
        <MyContainer wrapper={false} minHeight={600} sx={{ display: 'flex', mt: 5, flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <CaruselPerson />
            <MyText variant="body1" sx={{ width: '90%', mt: 4 }}>
                <FormattedMessage id="pilot_project_about_page" />
            </MyText>
        </MyContainer>
    )
}

export default TwoCaruselScreen