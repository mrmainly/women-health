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

const Root = styled(Box)(() => ({
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justofyContent: 'center',
    flexDirection: 'column'
}))

const TitleScreen: React.FC<TitleScreenProps> = ({ color, variant, children, width, description }) => {
    return (
        <Root>
            <MyText variant={variant} sx={{ color: color, width: width, fontWeight: 'normal' }}>{children}</MyText>
            <MyText variant="body1">
                {description}
            </MyText>
        </Root>
    )
}

export default TitleScreen