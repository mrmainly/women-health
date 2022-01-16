import React from 'react'

import { TitleScreen } from '../../constructor'
import { MyButton, MyContainer } from '..'

interface LinkToSurveysScreenProps {
    link: any
}

const LinkToSurveysScreen: React.FC<LinkToSurveysScreenProps> = ({ link }) => {
    return (
        <MyContainer wrapper={false} minHeight={10} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mb: 1 }}>
            <TitleScreen variant="h6" width={1160}> Для определения группы риска просим зарегистрироваться на портале и пройти универсальный анкетный тест</TitleScreen>
        </MyContainer>
    )
}

export default LinkToSurveysScreen