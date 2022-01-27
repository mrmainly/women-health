import React, { useEffect, useState } from 'react'
import Breast from './breathSurvey'

import { useLocation } from 'react-router-dom'
import { FormattedMessage } from "react-intl";

const BreathWrapper = () => {
    const location = useLocation()

    const arr = [
        <FormattedMessage id={'how_smoke_lung_survey'} />,
        <FormattedMessage id={'had_CT_lung_survey'} />,
        <FormattedMessage id={'have_hemoptysis_lung_survey'} />,
        <FormattedMessage id={'had_weight_loss_lung_survey'} />,
        <FormattedMessage id={'have_malignancy_lung_survey'} />,
        <FormattedMessage id={'had_temperature_lung_survey'} />
    ]
    // useEffect(() => {
    //     const newId = query.id
    //     const newDate = query.date
    //     setId(newId)
    //     setDate(new Date(newDate).getFullYear())
    // }, [query])
    return (
        <>
            <Breast arr={arr} id={location.state.surveyId} />
        </>
    )
}

export default BreathWrapper