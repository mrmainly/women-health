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

const DescriptionBox = styled(Box)(({ theme }) => ({
    width: '60%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const Line = styled(Box)(({ theme }) => ({
    width: 100,
    backgroundColor: '#F2C94C',
    height: 5,
    marginTop: 100
}))

const PageHeaderText: React.FC<PageHeaderTextProps> = ({ title, description, titleSize, tag, showLine, descriptionColor, tagColor, ...props }) => {
    return (
        <TitleBox {...props}>
            <MyText variant="body1" sx={{ color: tagColor ? tagColor : '#EB5757' }}>{tag}</MyText>
            <TextBox>
                <MyText variant={titleSize} sm={30} sx={{ fontWeight: 600 }}>{title}</MyText>
            </TextBox>
            <DescriptionBox>
                <MyText variant="body1" sx={{ fontStyle: 'normal', mt: 2, color: descriptionColor ? descriptionColor : '#575A7B' }}>{description}</MyText>
            </DescriptionBox>
            {showLine &&
                <Line></Line>
            }
        </TitleBox>
    )
}

export default PageHeaderText