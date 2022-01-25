import React from 'react'

import { MyContainer } from '../../../components'
import { TitleScreen, CaruselSurvey } from '../../../constructor'

const SixSurveyCaruselScreen = () => {
    return (
        <MyContainer wrapper={false} minHeight={600} sx={{ mt: 8 }}>

            <CaruselSurvey />

        </MyContainer>
    )
}

export default SixSurveyCaruselScreen