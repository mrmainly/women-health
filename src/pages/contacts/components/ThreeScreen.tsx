import React from 'react'

import { MyContainer, MyText, MyButton } from '../../../components'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

const BoxText = styled(Box)(({ theme }) => ({
    width: '70%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const Line = styled(Box)(({ theme }) => ({
    width: 100,
    height: 3,
    backgroundColor: '#0B806B',
    marginBottom: 20
}))

const ThreeScreen = () => {
    return (
        <MyContainer wrapper={false} minHeight={100}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                mt: 8
            }}
        >
            <Line></Line>
            <BoxText>
                <MyText variant="h6" sx={{ color: '#313131', fontWeight: 'normal' }}>
                    Для определения группы риска просим зарегистрироваться на портале и пройти универсальный анкетный тест
                </MyText>
            </BoxText>
            <MyButton sx={{ mt: 3, bgcolor: '#01996D' }}>
                Узнать результат
            </MyButton>
        </MyContainer>
    )
}

export default ThreeScreen