import React, { useEffect, useState } from 'react'
import LiverSurvey from './liverSurvey'

import { useLocation } from 'react-router-dom'
import { FormattedMessage } from "react-intl";

const LiverWrapper = () => {
    const location = useLocation()

    let arr = [
        <FormattedMessage id="had_hepatitis_liver_survey" />,
        <FormattedMessage id="carrier_hbsag_liver_survey" />,
        <FormattedMessage id="have_cirrhosis_liver_survey" />,
        <FormattedMessage id="skin_itching_liver_survey" />,
        <FormattedMessage id="pain_right_hypochondrium_liver_survey" />,
        <FormattedMessage id="blood_vomit_liver_survey" />,
        <FormattedMessage id="have_weight_loss_liver_survey" />,
        <FormattedMessage id="parents_cancer_liver_survey" />,
        <FormattedMessage id="had_temperature_liver_survey" />
    ]
    return (
        <>
            <LiverSurvey arr={arr} id={location.state.surveyId} />
        </>
    )
}

export default LiverWrapper