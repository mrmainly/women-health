import React from 'react'

import { MyContainer } from '../../components'
import { FormFeedBack } from '../../constructor'

import FaqPageHeader from './components/FaqPageHeader'
import FaqTextInfoScreen from './components/FaqTextInfoScreen'
import FaqQuestionScreen from './components/FaqQuestionsScreen'

const Faq = () => {
    return (
        <div style={{ marginBottom: 50 }}>
            <FaqPageHeader />
            <MyContainer wrapper={false}>
                <FaqTextInfoScreen />
                <FaqQuestionScreen />
                <FormFeedBack />
            </MyContainer>
        </div>
    )
}

export default Faq