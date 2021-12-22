import React from 'react'

import StartScreen from './components/StartScreen'
import TwoCaruselScreen from './components/TwoCaruselScreen'
import ThreeScreen from './components/ThreeSreen'
import FourScreenUsefulLinks from './components/FourScreen'
import FiveScreen from './components/FiveScreen'
import SixSurveyCaruselScreen from './components/SixSurveyCaruselScreen'

const About = () => {
    return (
        <div>
            <StartScreen />
            <TwoCaruselScreen />
            <ThreeScreen />
            <FourScreenUsefulLinks />
            <FiveScreen />
            <SixSurveyCaruselScreen />
        </div>
    )
}

export default About