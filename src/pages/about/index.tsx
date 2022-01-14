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
            <SixSurveyCaruselScreen />
            {/* <div style={{
                background: 'url(/img/Element/logo2.png)',
                width: 100,
                height: 100,
                borderRadius: '50%',
                border: '1px solid black',
                backgroundRepeat: 'no-repeat',
                backgroundOrigin: 'content-box',
                backgroundPosition: 'center',
                backgroundSize: 80,
                padding: 10
            }}>

            </div> */}
        </div>
    )
}

export default About