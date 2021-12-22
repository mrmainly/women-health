import React from 'react'

import { styled } from '@mui/system'
import { Box } from '@mui/material'

import { MyText } from '../../components'
import { TitleScreenProps } from '../../interface'

const Hr = styled(Box)(() => ({
    height: 2,
    background: '#245852',
    width: '100%',

}))

const TitleScreen: React.FC<TitleScreenProps> = ({ color, variant, children, width, description }) => {
    return (
        <Box style={{ textAlign: 'center' }}>
            <Box style={{ display: 'flex', alignItems: 'center', marginTop: 30, textAlign: 'center' }}>
                <Hr />
                <MyText variant={variant} sx={{ color: color, width: width, fontWeight: 'bold' }}>{children}</MyText>
                <Hr />
            </Box>
            <MyText variant="body1">
                {description}
            </MyText>
        </Box>
    )
}

export default TitleScreen