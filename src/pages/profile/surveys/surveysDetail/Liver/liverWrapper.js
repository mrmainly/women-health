import React, { useEffect, useState } from 'react'
import LiverSurvey from './liverSurvey'

const LiverWrapper = () => {
    const [id, setId] = useState(1)
    const [date, setDate] = useState(1)

    let arr = [
        "Хроническай вируснай гепатит Б эбэтэр С диагноһын туруора сылдьыбыттара дуо?",
        " Анаалыстаан баран HBsAg (аш-би-эс антиген) хааҥҥар баар (положительнай) дииллэр этэ дуо?",
        "Быарыҥ циррозтаах дииллэр этэ дуо?",
        "Тирииҥ туох да биллэр төрүөтэ суох кыһыйар дуо, кыһыйара түүнүн күүһүрэр дуо?",
        "Уҥа агдаҥ аннынан аалан ыалдьааччы дуо?",
        "Хаан булкадаһыктааҕынан хотуолааччыгын дуо?",
        "Ыйааһыныҥ эмискэ түстэ дуо?",
        "Төрөппүттэриҥ быар раагынан ыалдьа сылдьыбыттара дуо?",
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
            <LiverSurvey arr={arr} />
        </>
    )
}

export default LiverWrapper