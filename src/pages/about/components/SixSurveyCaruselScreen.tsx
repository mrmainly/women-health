import React from 'react'

import { MyContainer } from '../../../components'
import { TitleScreen, CaruselSurvey } from '../../../constructor'

const SixSurveyCaruselScreen = () => {
    return (
        <MyContainer wrapper={false} minHeight={600}>
            <TitleScreen variant="h4" width={1200} description='“Регистрация - Тестирование - Осмотр”'>Берегите здоровье!</TitleScreen>
            <div style={{ marginTop: 50 }}>
                <CaruselSurvey />
            </div>
        </MyContainer>
    )
}

export default SixSurveyCaruselScreen