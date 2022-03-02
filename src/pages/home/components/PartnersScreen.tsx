import React from 'react'

import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import { MyContainer, MyText } from '../../../components'
import { FormattedMessage } from "react-intl";

const Companys = styled(Grid)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

}))

const CompanyItem = styled(Box)(({ theme }) => ({
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0
    },
}))

const Box1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flexWrap: 'wrap'
}))

const PartnersScreen = () => {
    const CompanyList = ['brand_1_yarod', 'brand_2_min', 'brand_3_iarm', 'Group2213', 'brand_5_aor']
    return (
        <MyContainer wrapper={true}
            sx={{
                pt: 5,
                pb: 3
            }}
        >
            <Companys container>
                <MyText variant="h5">
                    <FormattedMessage id={'partners_project'} />
                </MyText>
                <Box1>
                    {CompanyList.map((itemCompany) => (
                        <CompanyItem key={itemCompany}>
                            <img src={`/img/Element/${itemCompany}.png`} />
                        </CompanyItem>
                    ))}
                </Box1>
            </Companys>
        </MyContainer>
    )
}

export default PartnersScreen