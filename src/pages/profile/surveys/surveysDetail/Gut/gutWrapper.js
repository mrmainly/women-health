import React, { useEffect, useState } from 'react'
import GutSurvey from './gutSurvey'

import { useLocation } from 'react-router-dom'

const GutWrapper = () => {
    const location = useLocation()

    let arr = [
        "Аймахтаргар (ийэҕэр, аҕаҕар, эбэҕэр, эһэҕэр) оһоҕос раага баар этэ дуо?",
        "Сааҕыҥ хата-хата сыптарытар түгэннэрэ баар буолааччы дуо?",
        "Сааххар хаан баарын көрөөччүгүн дуо?",
        "Сааххар сыраан курдук баар буолааччы дуо (элбэх)?",
        "Ыйааһыныҥ эмискэ түстэ дуо?",
        "Сааҕыҥ кэлин уларыйда дуо?",
        "Саахтаан бүппүт кэннэ хайдах эрэ ситэ саахтаабатах курдук буолааччы дуо?",
        "Суон оһоҕос ханнык эмит ыарыыта Эйиэхэ баар дуо (Крон ыарыыта, неспецифическэй язвалаах колит, суон оһоҕос раага)?",
        "Когда Вы последний раз проходили колоноскопию",
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
            <GutSurvey arr={arr} id={location.state.surveyId} />
        </>
    )
}

export default GutWrapper