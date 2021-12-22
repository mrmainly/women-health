import React from 'react'

import { MyContainer, MyText } from '../../../components'
import { CaruselUsefulLinks, TitleScreen } from '../../../constructor'

const FourScreen = () => {
    return (
        <MyContainer wrapper={false} sx={{ mt: 8 }} minHeight={350}>
            <TitleScreen variant="h4" color="#245852" width={900} description='на партнеров проекта'>Полезные ссылки </TitleScreen>
            <div style={{ marginTop: 40 }}>
                <CaruselUsefulLinks />
            </div>
        </MyContainer>
    )
}

export default FourScreen