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
            <PageHeaderText showLine={false} titleSize="h2" title="Эбии ыйытыылааххын дуо?" description='Өскөтө эбии ыйытыылар баар буоллахтарына аналлаах сиргэ суруйуоххутун сөп, эмиэ онно бырайыак туһунан бэйэҕит санааҕытын суруйуоххутун, хайдах тупсарыахха сөбүгэр бэйэҕит этиигитин ыытыаххытын сөп.' tag="БИҺИЭХЭ ТАХСЫЫ" />
            <Root>
                <BoxInfoWrapper>
                    <BoxInfo>
                        <img src="/img/Element/Message_duotone.png" />
                        <MyText sx={{ fontWeight: '600' }}>Биһиэхэ суруйуҥ</MyText>
                        <MyText>24 чаас иһигэр хоруйдуурга бэлэммит</MyText>
                    </BoxInfo>
                    <BoxInfo>
                        <img src="/img/Element/Vector189.png" />
                        <MyText sx={{ fontWeight: '600', mt: 2 }}>ТӨЛӨПҮӨННЭЭҤ</MyText>
                        <MyText>Сарсыарда 08:00 киэһэ 18:00 диэри</MyText>
                    </BoxInfo>
                </BoxInfoWrapper>
                <InputBox>
                    <InputCustom label="Аатыҥ-суолуҥ" variant="standard" />
                    <InputCustom label="Почтаҥ" variant="standard" />
                </InputBox>
                <Input
                    label="Этииҥ"
                    variant="outlined"
                    rows={10}
                    id="outlined-multiline-static"
                    multiline
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <MyButton sx={{ mt: 2, bgcolor: '#EB5757', color: 'white', fontSize: 16 }}>Ыытарга</MyButton>
            </Root>
        </Box>
    )
}

export default FormFeedBack