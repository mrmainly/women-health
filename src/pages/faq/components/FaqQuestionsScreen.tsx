import React from 'react'

import FaqData from '../../../local_data/FaqData'

import { AccordionSummary, AccordionDetails, Accordion, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system'

const Question = styled(Typography)({
    fontSize: 30,
    padding: '10px 0px',
    fontWeight: 500,
})

const FaqQuestionScreen = () => {
    return (
        <div style={{ marginTop: 50 }}>
            {FaqData.map((faq, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Question >{faq.question}</Question>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default FaqQuestionScreen