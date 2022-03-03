import React from 'react'

import StartScreen from './components/StartScreen'
import ThreeScreen from './components/ThreeScreen'
import TwoScreen from './components/TwoScreen'
import { UsefulLinks, FormFeedBack } from '../../constructor'
import { MyContainer } from '../../components'

const Contacts = () => {
    return (
        <div>
            <StartScreen />
            <TwoScreen />
            <MyContainer wrapper={false} sx={{ mt: 5 }}>
                <UsefulLinks />
                <FormFeedBack />
            </MyContainer>
        </div>
    )
}

export default Contacts