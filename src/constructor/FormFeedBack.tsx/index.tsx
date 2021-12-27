import React from 'react'

import { MyContainer, MyText, Input, Form, MyButton } from '../../components'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/system'

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 30,
    background: 'radial-gradient(112.51% 225.51% at 3.04% 6.02%, rgba(1, 153, 109, 0.5) 0%, rgba(4, 163, 117, 0) 100%), radial-gradient(39.2% 112.64% at 82.34% 110.89%, rgba(1, 153, 109, 0.5) 0%, rgba(4, 163, 117, 0) 100%), #245852;',
    minHeight: 600,
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 50,
    paddingBottom: 50,
    color: 'white',
    [theme.breakpoints.down('md')]: {
        paddingRight: 20,
        paddingLeft: 20
    },
    [theme.breakpoints.down('sm')]: {
        paddingRight: 10,
        paddingLeft: 10
    },
}))

const Line = styled(Box)(({ theme }) => ({
    width: 100,
    height: 3,
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
        width: 20
    },
}))

const FormFeedBack = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
            <MyText variant="h3">Остались вопросы?</MyText>
            <MyText variant="body1" sx={{ mt: 4, mb: 4, }}>ответим на дополнительные вопросы в специальной форме, там же можно написать отзыв об платформе и поделится рекомендациями по улучшению сервиса.</MyText>
            <Root>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Line></Line>
                    <MyText variant="h4" sx={{ ml: 2, mr: 2 }} sm={25}>Обратная связь</MyText>
                    <Line></Line>
                </Box>
                <Input label="ФИО пользователя" sx={{ bgcolor: 'white', borderRadius: 1, mt: 8 }} />
                <Input label="ФИО пользователя" sx={{ bgcolor: 'white', borderRadius: 1, }} />
                <Input label="ФИО пользователя" sx={{ bgcolor: 'white', borderRadius: 1 }} />
                <TextField
                    label="ФИО пользователя"
                    fullWidth
                    rows={10}
                    id="outlined-multiline-static"
                    multiline
                    margin='normal'
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <MyButton sx={{ mt: 2, bgcolor: 'white', color: 'black', fontSize: 20 }}>Отправить</MyButton>
                <MyText variant="h6" sx={{ mt: 2, }}>Я согласен с условиями обработки персональных данных</MyText>
            </Root>
        </Box>
    )
}

export default FormFeedBack