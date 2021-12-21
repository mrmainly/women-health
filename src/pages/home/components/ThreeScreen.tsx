import React from 'react'

import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import { MyContainer } from '../../../components'

const Companys = styled(Grid)(({ }) => ({
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
}))

const CompanyItem = styled(Grid)(({ }) => ({
    marginLeft: 15,
    marginRight: 15
}))

const ThreeScreen: React.FC = () => {
    const CompanyList = ['brand_1_yarod', 'brand_2_min', 'brand_3_iarm', 'brand_4_esph', 'brand_5_aor']
    return (
        <MyContainer wrapper={false} minHeight={100}>
            <Companys container>
                {CompanyList.map((itemCompany) => (
                    <CompanyItem item key={itemCompany}>
                        <img src={`/img/Element/${itemCompany}.png`} />
                    </CompanyItem>
                ))}
            </Companys>
        </MyContainer>
    )
}

export default ThreeScreen