import React from 'react'

import {MyContainer, MyText, Input, Form, MyButton} from '../../components'
import {PageHeaderText} from '..'
import {Box, TextField} from '@mui/material'
import {styled} from '@mui/system'
import {FormattedMessage} from "react-intl";

const Root = styled(Box)(({theme}) => ({
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

const InputBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    },
}))

const BoxInfo = styled(Box)(({theme}) => ({
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

const BoxInfoWrapper = styled(Box)(({theme}) => ({
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

const InputCustom = styled(TextField)(({theme}) => ({
    width: '45%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const FormFeedBack = () => {
    return (
        <Box sx={{textAlign: 'center', mt: 8, mb: 8}}>
            <PageHeaderText
                showLine={false}
                titleSize="h2"
                title={<FormattedMessage id={'faq_questions_remain'}/>}
                description={<FormattedMessage id={'faq_write_us'}/>}
                tag={<FormattedMessage id={'faq_contact_us'}/>}
            />
            <Root>
                <BoxInfoWrapper>
                    <BoxInfo>
                        <img src="/img/Element/Message_duotone.png"/>
                        <MyText sx={{fontWeight: '600'}}><FormattedMessage id={'faq_email'}/></MyText>
                        <MyText><FormattedMessage id={'faq_write_us'}/></MyText>
                    </BoxInfo>
                    <BoxInfo>
                        <img src="/img/Element/Vector189.png"/>
                        <MyText sx={{fontWeight: '600', mt: 2}}><FormattedMessage id={'faq_call'}/></MyText>
                        <MyText><FormattedMessage id={'faq_during_day'}/></MyText>
                    </BoxInfo>
                </BoxInfoWrapper>
                <InputBox>
                    <InputCustom label={<FormattedMessage id={'faq_name'}/>} variant="standard"/>
                    <InputCustom label={<FormattedMessage id={'faq_email'}/>} variant="standard"/>
                </InputBox>
                <Input
                    label={<FormattedMessage id={'faq_message'}/>}
                    variant="outlined"
                    rows={10}
                    id="outlined-multiline-static"
                    multiline
                    sx={{bgcolor: 'white', borderRadius: 1}}
                />
                <MyButton sx={{mt: 2, bgcolor: '#EB5757', color: 'white', fontSize: 16}}>
                    <FormattedMessage id={'faq_send_message'}/>
                </MyButton>
            </Root>
        </Box>
    )
}

export default FormFeedBack