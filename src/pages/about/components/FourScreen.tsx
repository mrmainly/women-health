import React from 'react'

import { MyContainer, MyText } from '../../../components'
import { UsefulLinks, TitleScreen } from '../../../constructor'

const FourScreen = () => {
    return (
        <MyContainer wrapper={false} sx={{ mt: 8 }} minHeight={350}>
            <div style={{ marginTop: 40 }}>
                <UsefulLinks />
            </div>
        </MyContainer>
    )
}

export default FourScreen