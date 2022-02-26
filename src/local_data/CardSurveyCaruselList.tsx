import React from "react";

import { FormattedMessage } from "react-intl";

const CardSurveyCaruselList = [
    {
        img: 'carvix1',
        label: <FormattedMessage id={'climatic_period'} />,
        link: '/climatic-period'
    },
    {
        img: 'cervix2',
        label: <FormattedMessage id={'Infertility'} />,
        link: '/Infertility'
    },
    {
        img: 'cervix3',
        label: <FormattedMessage id={'endometriosis'} />,
        link: '/endometriosis'
    },
    {
        img: 'breast',
        label: <FormattedMessage id={'screening_mammary_gland'} />,
        link: '/breast'
    },
    {
        img: 'cervix',
        label: <FormattedMessage id={'screening_cervix'} />,
        link: '/cervix'
    },
]

export default CardSurveyCaruselList