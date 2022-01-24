import React from 'react'

import {MyContainer} from '../../components'
import {FormFeedBack, PageHeaderText} from '../../constructor'

import FaqQuestionScreen from './components/FaqQuestionsScreen'
import {FormattedMessage} from "react-intl";

const Faq = () => {
    return (
        <MyContainer wrapper={false} sx={{marginTop: 8}}>
            <PageHeaderText
                showLine={true}
                titleSize="h2"
                title={<FormattedMessage id={'question_answers_menu'}/>}
                description={<FormattedMessage id={'faq_description'}/>}
                tag="РУБРИКА"
            />
            {/* TODO: убрать? <FaqTextInfoScreen /> */}
            <FaqQuestionScreen/>
            <FormFeedBack/>
        </MyContainer>
    )
}

export default Faq