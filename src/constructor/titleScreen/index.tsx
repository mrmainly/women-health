import React from 'react'

import { styled } from '@mui/system'
import { Box } from '@mui/material'

import { MyText } from '../../components'
import { TitleScreenProps } from '../../interface'

const Hr = styled(Box)(() => ({
    height: 2,
    width: '90%',
    background: '#245852'
}))

const TitleScreen: React.FC<TitleScreenProps> = ({ color, variant, children }) => {
    return (
        <Box style={{ display: 'flex', alignItems: 'center', marginTop: 30, textAlign: 'center' }}>
            <Hr />
            <MyText variant={variant} sx={{ minWidth: 300, color: color }}>{children}</MyText>
            <Hr />
        </Box>
    )
}

export default TitleScreen