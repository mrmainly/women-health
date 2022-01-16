import React from 'react'

import { TitleScreen } from '../../constructor'
import { MyButton, MyContainer } from '..'

interface LinkToSurveysScreenProps {
    link: any
}

const LinkToSurveysScreen: React.FC<LinkToSurveysScreenProps> = ({ link }) => {
    return (
        <MyContainer wrapper={false} minHeight={10} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mb: 1, mt: 5 }}>
            <TitleScreen variant="h6" width={1160}>Кутталлаах бөлөххө киирэри билэргэ портаалга бэлиэтэн (регистрация) уонна тургутар анкетаны толор</TitleScreen>
        </MyContainer>
    )
}

export default LinkToSurveysScreen