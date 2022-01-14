import React from 'react'

import { styled } from '@mui/system'
import { Box } from '@mui/material'

import { MyText } from '../../components'
import { PageHeaderTextProps } from '../../interface'

const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const TextBox = styled(Box)(({ theme }) => ({
    width: '80%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const PageHeaderText: React.FC<PageHeaderTextProps> = ({ title, description, titleSize, tag, ...props }) => {
    return (
        <TitleBox {...props}>
            <MyText variant="body1" sx={{ color: '#EB5757' }}>{tag}</MyText>
            <TextBox>
                <MyText variant={titleSize} sm={30} sx={{ fontWeight: 600 }}>{title}</MyText>
            </TextBox>
            <MyText variant="body1" sx={{ fontStyle: 'normal', mt: 1 }}>{description}</MyText>
        </TitleBox>
    )
}

export default PageHeaderText