import React, { useState } from 'react'

import { SurveysListScreen, MyContainer } from '../../components'
import StartScreen from './components/StartScreen'
import PartnersScreen from './components/PartnersScreen'
import FourScreen from './components/FourScreen'
import FiveScreen from './components/FiveScreen'
import SixCaruselScreen from './components/SixCaruselScreen'
import { CaruselSurvey } from '../../constructor'

const HomePage: React.FunctionComponent = () => {
    return (
        <div >
            <div style={{ background: '#fcf2f5', }}>
                <StartScreen />
                <PartnersScreen />
                <FourScreen />
            </div>
            <FiveScreen />
            <SixCaruselScreen />
            <SurveysListScreen />
        </div>
    )
}

export default HomePage