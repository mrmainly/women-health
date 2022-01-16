import React from 'react'

import { MyContainer, MyText, Input, Form, MyButton } from '../../components'
import { PageHeaderText } from '..'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/system'

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 600,
    color: 'black',
    [theme.breakpoints.down('md')]: {
        paddingRight: 20,
        paddingLeft: 20
    },
    [theme.breakpoints.down('sm')]: {
        paddingRight: 10,
        paddingLeft: 10
    },
}))

const InputBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    },
}))

const BoxInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginTop: 20
    },
}))

const BoxInfoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 80,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}))

const InputCustom = styled(TextField)(({ theme }) => ({
    width: '45%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const FormFeedBack = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
            <PageHeaderText showLine={false} titleSize="h2" title="Остались вопросы?" description='ответим на дополнительные вопросы в специальной форме, там же можно написать отзыв об платформе и поделится рекомендациями по улучшению сервиса.' tag="СВЯЖИТЕСЬ С НАМИ" />
            <Root>
                <BoxInfoWrapper>
                    <BoxInfo>
                        <img src="/img/Element/Message_duotone.png" />
                        <MyText sx={{ fontWeight: '600' }}>НАПИШИТЕ НАМ</MyText>
                        <MyText>Мы ответим в течернии ~24 часов</MyText>
                    </BoxInfo>
                    <BoxInfo>
                        <img src="/img/Element/Vector189.png" />
                        <MyText sx={{ fontWeight: '600', mt: 2 }}>НАПИШИТЕ НАМ</MyText>
                        <MyText>8-18 в течении дня</MyText>
                    </BoxInfo>
                </BoxInfoWrapper>
                <InputBox>
                    <InputCustom label="Ваше имя" variant="standard" />
                    <InputCustom label="Ваша почта" variant="standard" />
                </InputBox>
                <Input
                    label="Ваше сообщение"
                    variant="outlined"
                    rows={10}
                    id="outlined-multiline-static"
                    multiline
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <MyButton sx={{ mt: 2, bgcolor: '#EB5757', color: 'white', fontSize: 16 }}>Отправить сообщение</MyButton>
            </Root>
        </Box>
    )
}

export default FormFeedBack