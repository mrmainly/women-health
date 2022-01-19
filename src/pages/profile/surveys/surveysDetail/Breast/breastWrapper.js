import React, { useEffect, useState } from 'react'
import Breast from './breastSurvey'
import axios from 'axios'

const BreastLanding = () => {
    const [id, setId] = useState(1)
    const [date, setDate] = useState(1)

    let arr =
        [
            "Чугас аймахтарыҥ (ийэҥ/аҕаҥ, эбэҥ/эһэҥ, бииргэ төрөөбүттэриҥ) эмиий раагынан, оһоҕос раагынан, дьахтар уорганнарын раагынан ыалдьа сылдьыбыттара дуо?",
            "Эмиийгин тутан көрдөххүнэ туох эмит кытаанах баар курдук дуо?",
            "Түөһүҥ тириитигэр “лимон хаҕын курдук” учаастактаах дуо?",
            "Эмиийгиттэн убаҕас тахсар дуо?",
            "Эмиийиҥ чопчута уларыйбыт курдук буолла дуо (холобур, эмиийиҥ иһигэр киирбит курдук)?",
            "Бүтэһигин маммографияны хаһан ааспыккыный?",
            "Бигэргэтиллибит раак ыарыылааххын дуо?",
            "Ыйдааҕыҥ хас сааскар аан бастаан кэлбитэй?",
            "Төрөөбүтүҥ дуо?",
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
            <Breast arr={arr} />
        </>
    )
}

export default BreastLanding