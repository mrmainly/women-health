import React, { useEffect, useState } from 'react'
import ProstateSurvey from './prostateSurvey'

const ProstateWrapper = () => {
    const [id, setId] = useState(1)
    const [date, setDate] = useState(1)

    let arr = [
        "Түүн хаста ииктиигиний?",
        "Ииктээн бүппүтүҥ кэннэ хабаҕыҥ билигин да кураанахсыйа илик курдук буолар дуо?",
        "Биирдэ эмит иигиҥ хааннаах этэ дуо?",
        "Хаһан эмит иигиҥ кыайан кэлбэт буолбут түгэнэ баара дуо?",
        "ПСА онкомаркерга анаалыс бүтэһигин хаһан туттарбыккыный?",
        "Бигэргэтиллибит раак ыарыылааххын дуо?",
        "Бүтэһик 10 хонук иһигэр температуураҥ 37,5 кыраадыстан үрдүктүк тахса сылдьыбыттаах дуо?",
    ]
    // useEffect(() => {
    //     const newId = query.id
    //     const newDate = query.date
    //     setId(newId)
    //     setDate(new Date(newDate).getFullYear())
    // }, [query])
    return (
        <>
            <ProstateSurvey arr={arr} />
        </>
    )
}

export default ProstateWrapper