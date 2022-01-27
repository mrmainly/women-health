import React, { useEffect, useState } from 'react'
import GutSurvey from './gutSurvey'

import { useLocation } from 'react-router-dom'

const GutWrapper = () => {
    const location = useLocation()

    let arr = [
        "Есть ли среди Ваших родственников (отец/ мать; бабушка/дедушка) случаи заболевания раком толстой или прямой кишки?",
        "Бывает ли у Вас поносы переходящие на запоры",
        "Замечали ли Вы при акте дефекации наличие крови в кале?",
        "Замечали ли Вы при акте дефекации наличие слизи (в большом количестве) в кале?",
        "Имеется ли у Вас необъясняемое снижение массы тела",
        "Отмечаете ли Вы изменения стула?",
        "Бывают ли у Вас чувство неполного опорожнения прямой кишки после акта дефекации?",
        "Имеются ли у Вас хронические заболевания толстой кишки (Болезнь крона или неспецифический язвенный колит, рак толстой кишки)?",
        "Когда Вы последний раз проходили колоноскопию",
        "Последние 10 дней были ли у Вас эпизоды повышения температуры тела выше 37,5*С"
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