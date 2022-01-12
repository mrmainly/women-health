import React, { useState } from 'react'

import { SurveysListScreen, MyContainer } from '../../components'
import StartScreen from './components/StartScreen'
import ThreeScreen from './components/ThreeScreen'
import FourScreen from './components/FourScreen'
import FiveScreen from './components/FiveScreen'
import SixCaruselScreen from './components/SixCaruselScreen'
import { CaruselSurvey } from '../../constructor'

const HomePage: React.FunctionComponent = () => {
    const [stateInnerWidth, setStateInnerWidth] = useState<boolean>(true)
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setStateInnerWidth(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    return (
        <>
            <StartScreen />
            <ThreeScreen />
            <FourScreen />
            <FiveScreen />
            <SixCaruselScreen />
            {stateInnerWidth ?
                <SurveysListScreen />
                :
                <MyContainer wrapper={false}>
                    <CaruselSurvey />
                </MyContainer>
            }
        </>
    )
}

export default HomePage