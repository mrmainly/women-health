import React from 'react'

import { TitleScreen } from '../../constructor'
import { MyButton, MyContainer } from '..'
import { FormattedMessage } from "react-intl";

interface LinkToSurveysScreenProps {
    link: any
}

const LinkToSurveysScreen: React.FC<LinkToSurveysScreenProps> = ({ link }) => {
    return (
        <MyContainer wrapper={false} minHeight={10} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mb: 1, mt: 3 }}>
            <TitleScreen variant="h6" width={1160}><FormattedMessage id="take_test_2_climatic_cancer" /></TitleScreen>
        </MyContainer>
    )
}

export default LinkToSurveysScreen