import React from 'react'

import { MyContainer, MyText } from '../../../components'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

import themeMain from '../../../theme'

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
            label: ' Главный врач:',
            span: 'Афанасьева Лена Николаевна'
        },
        {
            label: 'Адрес:',
            span: 'г. Якутск, ул. Стадухина 81 корп. 1'
        },
        {
            label: 'e-mail:',
            span: 'yarod@gov14.ru'
        },
        {
            label: 'Факс:',
            span: '(4112) 43-21-63'
        },
        {
            label: 'Сайт:',
            span: 'onkosakha.ru'
        },
        {
            label: 'Круглосуточная "горячая линия":',
            span: '89142705379'
        },
        {
            label: 'Телефон Всероссийской горячей линии помощи онкологическим больным:',
            span: '+7 (800) 100 01 91'
        }
    ]
    return (
        <MyContainer wrapper={false} sx={{ mt: 5 }} minHeight={500}>
            <GridRoot container>
                <GridImg item lg={5} xl={5} md={5} sm={12} xs={12}>
                    <img src={'/img/Element/men.png'} style={{ width: '150%' }} />
                </GridImg>
                <GridText item lg={7} xl={7} md={7} sm={12} xs={12}>
                    <MyText variant="h6" sm={18}>Якутский республиканский онкологический диспансер, г. Якутск ГБУ РС (Я) "Якутский республиканский онкологический диспансер"</MyText>
                    {data.map((item, index) => (
                        <MyText variant="h6" sm={16} sx={{ fontWeight: 'normal', mt: 1 }} key={index}>{item.label}<Span>{item.span}</Span></MyText>
                    ))}
                </GridText>
            </GridRoot>
        </MyContainer>
    )
}

export default TwoScreen