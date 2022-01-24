import React, { useEffect, useState } from 'react'
import ProstateSurvey from './prostateSurvey'

import { useLocation } from 'react-router-dom'

const ProstateWrapper = () => {
    const location = useLocation()

    let arr = [
        "Түүн хаста ииктиигиний?",
        "Ииктээн бүппүтүҥ кэннэ хабаҕыҥ билигин да кураанахсыйа илик курдук буолар дуо?",
        "Биирдэ эмит иигиҥ хааннаах этэ дуо?",
        "Хаһан эмит иигиҥ кыайан кэлбэт буолбут түгэнэ баара дуо?",
        "ПСА онкомаркерга анаалыс бүтэһигин хаһан туттарбыккыный?",
        "Бигэргэтиллибит раак ыарыылааххын дуо?",
        "Бүтэһик 10 хонук иһигэр температуураҥ 37,5 кыраадыстан үрдүктүк тахса сылдьыбыттаах дуо?",
    ]
    return (
        <>
            <ProstateSurvey arr={arr} id={location.state.surveyId} />
        </>
    )
}

export default ProstateWrapper