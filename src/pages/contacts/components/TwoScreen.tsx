import React from 'react'

import { MyContainer, MyText } from '../../../components'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

import themeMain from '../../../theme'
import { FormattedMessage } from "react-intl";

const GridImg = styled(Grid)({
    background: themeMain.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
})

const GridRoot = styled(Grid)(({ theme }) => ({
    boxShadow: '1px 2px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    padding: 20,
    [theme.breakpoints.down('md')]: {
        padding: 5
    },
}))

const GridText = styled(Grid)(({ theme }) => ({
    padding: 30,
    [theme.breakpoints.down('sm')]: {
        padding: 5
    },
}))

const Span = styled('span')({
    marginLeft: 20,
    color: '#245852'
})

const TwoScreen = () => {
    const data = [
        {
            label: <FormattedMessage id="contacts_chief_physician_label" />,
            span: <FormattedMessage id="contacts_chief_physician" />
        },
        {
            label: <FormattedMessage id="contacts_address_label" />,
            span: <FormattedMessage id="contacts_address" />
        },
        {
            label: <FormattedMessage id="contacts_email_label" />,
            span: <FormattedMessage id="contacts_email" />
        },
        {
            label: <FormattedMessage id="contacts_reception_label" />,
            span: <FormattedMessage id="contacts_reception" />
        },
        {
            label: <FormattedMessage id="contacts_site_label" />,
            span: <FormattedMessage id="contacts_site" />
        },
        {
            label: <FormattedMessage id="contacts_fax_label" />,
            span: <FormattedMessage id="contacts_fax" />
        },
        {
            label: <FormattedMessage id="contacts_hot_line_label" />,
            span: <FormattedMessage id="contacts_hot_line" />
        },
        {
            label: <FormattedMessage id="contacts_russian_line_label" />,
            span: <FormattedMessage id="contacts_russian_line" />
        }
    ]
    return (
        <MyContainer wrapper={false} sx={{ mt: 5 }} minHeight={500}>
            <GridRoot container>
                <GridImg item lg={5} xl={5} md={5} sm={12} xs={12}>
                    <img src={'/img/Element/men.png'} style={{ width: '150%' }} />
                </GridImg>
                <GridText item lg={7} xl={7} md={7} sm={12} xs={12}>
                    <MyText variant="h6" sm={18}><FormattedMessage id="contacts_yarod_name" /></MyText>
                    {data.map((item, index) => (
                        <MyText variant="h6" sm={16} sx={{ fontWeight: 'normal', mt: 1 }} key={index}>{item.label}<Span>{item.span}</Span></MyText>
                    ))}
                </GridText>
            </GridRoot>
        </MyContainer>
    )
}

export default TwoScreen