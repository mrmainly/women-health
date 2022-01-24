import React, { useEffect, useState } from 'react';
import { Box, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Button, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/system'

import Api from '../../../utils/api'
import { MenuProfile, MyContainer } from '../../../components'
import { ResultsProps } from '../../../interface'

// const useStyles = makeStyles({
//     table: {
//         minWidth: 300,
//     },
// });


const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
}))

const Results = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<ResultsProps[]>([])
    const navigate = useNavigate()

    const fetchDocuments = async () => {
        Api.getResults().then((res) => {
            const newData = res.data.reports.map((result: any) => {
                return {
                    'id': result.id,
                    'name': result.name,
                }
            })
            setData(newData)
            console.log(newData)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchDocuments()
    }, [])

    const handleOpenReport = (id: any) => {
        navigate(`https://онкопоисксаха.рф/api/report/report/${id}`)
    }

    return (
        <MyContainer wrapper={false}>
            <BoxWrapper>
                <MenuProfile />
                <TableContainer component={Paper} sx={{ mt: 13, ml: 1 }}>
                    <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {data.length ? data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.research_type}</TableCell>
                                    <TableCell style={{ display: "flex", justifyContent: 'flex-end' }}><Button variant="contained"
                                        style={{ color: "white" }}
                                        onClick={() => handleOpenReport(row.id)}
                                        color="primary">открыть</Button></TableCell>
                                </TableRow>
                            )) :
                                <Typography style={{ padding: "20px" }} align={"left"}>У вас еще нет результатов</Typography>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </BoxWrapper>
        </MyContainer>
    )
}

export default Results