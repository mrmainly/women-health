import React from 'react'

import StartScreen from './components/StartScreen'
import TwoCaruselScreen from './components/TwoCaruselScreen'
import ThreeScreen from './components/ThreeSreen'
import FourScreenUsefulLinks from './components/FourScreen'
import { MyContainer } from '../../components'

const About = () => {
    return (
        <div>
            <StartScreen />
            <TwoCaruselScreen />
            <ThreeScreen />
            <FourScreenUsefulLinks />
        </div>
    )
}

export default About