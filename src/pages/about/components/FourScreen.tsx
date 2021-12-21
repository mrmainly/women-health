import React from 'react'

import { MyContainer, } from '../../../components'
import { CaruselUsefulLinks, TitleScreen } from '../../../constructor'

const FourScreen = () => {
    return (
        <MyContainer wrapper={false} sx={{ mt: 8 }}>
            <TitleScreen variant="h4" color="#245852">Полезные ссылки </TitleScreen>
            <div style={{ marginTop: 40 }}>
                <CaruselUsefulLinks />
            </div>
        </MyContainer>
    )
}

export default FourScreen