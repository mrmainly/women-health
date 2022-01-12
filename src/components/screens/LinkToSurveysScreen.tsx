import React from 'react'

import { TitleScreen } from '../../constructor'
import { MyButton, MyContainer } from '..'

interface LinkToSurveysScreenProps {
    link: any
}

const LinkToSurveysScreen: React.FC<LinkToSurveysScreenProps> = ({ link }) => {
    return (
        <MyContainer wrapper={false} minHeight={100} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: 10 }}>
            <TitleScreen variant="h6" width={1160}> Для определения группы риска просим зарегистрироваться на портале и пройти универсальный анкетный тест</TitleScreen>
            <MyButton sx={{ mt: 5, minWidth: 150, bgcolor: '#245852' }}>Начать</MyButton>
        </MyContainer>
    )
}

export default LinkToSurveysScreen