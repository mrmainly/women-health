import React from 'react'
import ProstateSurvey from './prostateSurvey'

import { useLocation } from 'react-router-dom'
import { FormattedMessage } from "react-intl";

const ProstateWrapper = () => {
    const location = useLocation()

    let arr = [
        <FormattedMessage id="how_bladder_prostate_survey" />,
        <FormattedMessage id="incomplete_emptying_prostate_survey" />,
        <FormattedMessage id="have_blood_urination_prostate_survey" />,
        <FormattedMessage id="have_urinary_retention_prostate_survey" />,
        <FormattedMessage id="when_psa_prostate_survey" />,
        <FormattedMessage id="have_neoplasms_prostate_survey" />,
        <FormattedMessage id="had_temperature_prostate_survey" />,
    ]
    return (
        <>
            <ProstateSurvey arr={arr} id={location.state.surveyId} />
        </>
    )
}

export default ProstateWrapper