import React from 'react'

import { MyContainer } from '../../components'
import { FormFeedBack, PageHeaderText } from '../../constructor'

import FaqTextInfoScreen from './components/FaqTextInfoScreen'
import FaqQuestionScreen from './components/FaqQuestionsScreen'

const Faq = () => {
    return (
        <MyContainer wrapper={false} sx={{ marginTop: 8 }}>
            <PageHeaderText showLine={true} titleSize="h2" title="“Ыйытыы - Хоруй” " description='Өскөтө эбии ыйытыылар баар буоллахтарына аналлаах сиргэ суруйуоххутун сөп, эмиэ онно бырайыак туһунан бэйэҕит санааҕытын суруйуоххутун, хайдах тупсарыахха сөбүгэр бэйэҕит этиигитин ыытыаххытын сөп.' tag="РУБРИКА" />
            {/* <FaqTextInfoScreen /> */}
            <FaqQuestionScreen />
            <FormFeedBack />
        </MyContainer>
    )
}

export default Faq