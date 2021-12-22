import React from 'react'

import { MyContainer, MyText } from '../../../components'
import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'

const TitleBox = styled(Box)({
    padding: 15,
    backgroundColor: '#01996D',
    textAlign: 'center',
    borderRadius: 5,
    color: 'white'
})

const ImgBox = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        paddingLeft: 50
    },
    [theme.breakpoints.down('md')]: {
        marginTop: 50,
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: '-20px'
    },
}))

const FiveScreen = () => {
    return (
        <MyContainer wrapper={false} sx={{ mt: 10 }} minHeight={600}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item lg={7} xl={7} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '90%', textAlign: 'center' }}>
                        <TitleBox>Государственное бюджетное учреждение Республики Саха (Якутия) «Якутский республиканский онкологический<br /> диспансер»
                        </TitleBox>
                        <MyText variant="h6" sx={{ mt: 5, color: '#575A7B' }} md={16}>
                            Единственное учреждение Министерства здравоохранения Республики Саха (Якутия), оказывающее специализированную, в том числе высокотехнологичную, медицинскую помощь по профилю «онкология» взрослому населению.
                            В структуре диспансера поликлиника на 144 посещений в смену, стационар на 195 круглосуточных коек, из которых 90 коек – хирургического профиля, 105 – терапевтического профиля. Ежегодно онкодеспансер принимает свыше 15 тысяч пациентов и  выполняет более 2,5 тысяч операций.
                        </MyText>
                    </Box>
                </Grid>
                <ImgBox item lg={5} xl={5} md={6}>
                    <img src={'/img/Element/map.png'} style={{ width: '100%' }} />
                </ImgBox>
            </Grid>
        </MyContainer>
    )
}

export default FiveScreen