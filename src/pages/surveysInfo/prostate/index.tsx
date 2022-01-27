import React, { useState } from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer, MyButton } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'
import { FormattedMessage } from "react-intl";

const Prostate = () => {
    const [state, setState] = useState(false)
    const data1 = [
        {
            type: 'text',
            elem: [
                <FormattedMessage id="prostate_data1_text1" />,
                <FormattedMessage id="prostate_data1_text2" />,
                <FormattedMessage id="prostate_data1_text3" />
            ],
        },
        {
            title: <FormattedMessage id="prostate_symptoms" />,
            type: 'text',
            elem: [
                <FormattedMessage id="prostate_data1_title_column1" />
            ],
        },
        {
            type: 'column',
            elem: [
                <FormattedMessage id="prostate_data1_text1_column1" />,
                <FormattedMessage id="prostate_data1_text2_column1" />,
                <FormattedMessage id="prostate_data1_text3_column1" />
            ],
        },
    ]

    const data2 = [
        {
            align: 'start',
            text: [
                <FormattedMessage id="prostate_data1_title_column2" />,
                <FormattedMessage id="prostate_data1_text1_column2" />,
                <FormattedMessage id="prostate_data1_text2_column2" />,
                <FormattedMessage id="prostate_data1_text3_column2" />
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="prostate_cancer" />}
                description={<FormattedMessage id="prostate_description" />}
                img="prostata"
                infoImg="Frame27"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen />
            <LinkToSurveysScreen link="" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyButton
                    sx={{
                        bgcolor: '#EB5757',
                        mb: 5
                    }}
                    onClick={() => {
                        setState(!state)
                    }}
                >
                    Посмотреть доступные анкеты
                </MyButton>
            </div>
            {state &&
                <MyContainer
                    wrapper={false}
                    minHeight={600}
                >
                    <CaruselSurvey />
                </MyContainer>
            }
        </div>
    )
}

export default Prostate