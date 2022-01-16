import React from 'react'

import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import { MyContainer, MyText } from '../../../components'

const Companys = styled(Grid)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
}))

const CompanyItem = styled(Grid)(({ }) => ({
    marginLeft: 15,
    marginRight: 15
}))

const ThreeScreen: React.FC = () => {
    const CompanyList = ['brand_1_yarod', 'brand_2_min', 'brand_3_iarm', 'brand_4_esph', 'brand_5_aor']
    return (
        <MyContainer wrapper={true}
            sx={{
                pt: 5,
                bgcolor: '#F3FEFF'
            }}
        >
            <Companys container>
                <MyText variant="h5">БЫРЫЙЫАК КЫТТЫЫЛААХТАРА</MyText>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
                    {CompanyList.map((itemCompany) => (
                        <CompanyItem item key={itemCompany}>
                            <img src={`/img/Element/${itemCompany}.png`} />
                        </CompanyItem>
                    ))}
                </Box>
            </Companys>
        </MyContainer>
    )
}

export default ThreeScreen