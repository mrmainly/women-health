import React from 'react'

import { MyButton } from '../../components'
import StartScreen from './components/StartScreen'
import ThreeScreen from './components/ThreeScreen'
import FourScreen from './components/FourScreen'
import FiveScreen from './components/FiveScreen'
import SixCaruselScreen from './components/SixCaruselScreen'

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            <StartScreen />
            <ThreeScreen />
            <FourScreen />
            <FiveScreen />
            <SixCaruselScreen />
        </>
    )
}

export default HomePage