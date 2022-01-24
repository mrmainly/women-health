import React, { useEffect, useState } from 'react'
import Breast from './breathSurvey'

import { useLocation } from 'react-router-dom'

const BreathWrapper = () => {
    const location = useLocation()

    const arr = [
        "Төһө өр табахтыыгытый?",
        "Сыл иһигэр компьютернай томографияны ааспытыҥ дуо?",
        "Хаанынан силлээччигин дуо?",
        "Эмискэ ыйааһыныҥ түспүтэ буолаарай?",
        "Раак искэнэ Эйиэхэ баар дуо?",
        "Бүтэһик 10 хонук иһигэр температуураҥ 37,5 кыраадыстан үрдүктүк тахса сылдьыбыттаах дуо?"
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