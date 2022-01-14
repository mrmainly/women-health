import React from 'react'

import { MyContainer } from '../../components'
import { FormFeedBack, PageHeaderText } from '../../constructor'

import FaqTextInfoScreen from './components/FaqTextInfoScreen'
import FaqQuestionScreen from './components/FaqQuestionsScreen'

const Faq = () => {
    return (
        <MyContainer wrapper={false} sx={{ marginTop: 8 }}>
            <PageHeaderText showLine={true} titleSize="h2" title="“Вопрос - Ответ”" description='Здесь мы решили написать ответы на популярные вопросы, связанные с работой сервиса и темой скрининга.' tag="РУБРИКА" />
            {/* <FaqTextInfoScreen /> */}
            <FaqQuestionScreen />
            <FormFeedBack />
        </MyContainer>
    )
}

export default Faq