import { StringifyOptions } from 'querystring'
import React from 'react'

interface ButtonProps {
    children: any,
    onClick?: () => void,
    variant?: string,
    style?: any,
    sx?: any
}

interface MyContainerProps {
    children: any,
    wrapper: boolean,
    bgImg?: any,
    sx?: any,
    lg?: number,
    xl?: number,
    sm?: number,
    md?: number,
    xs?: number,
    minHeight?: number
}

interface MyTextProps {
    children: any,
    sx?: any,
    lg?: number,
    xl?: number,
    sm?: number,
    md?: number,
    xs?: number,
    variant?: any
}

interface MyLinkProps {
    children: any,
    href: string,
    sx?: any
}

interface CardPersonProps {
    img: any,
    name: string
    infoImg: any,
    tag: string,
    description: string
}

interface CardAboutProps {
    title: string,
    body: string,
    id: string | number,
    bgcolor: string
}

interface CardUsefulLinksProps {
    img: any,
    description: string,
    link: string,
}

interface TitleScreenProps {
    color?: string,
    variant: any,
    children: any,
    width: number,
    description?: string
}

interface CaruselSurveyProps {
    label: string,
    img: any,
    link: any
}


export type {
    ButtonProps,
    MyContainerProps,
    MyTextProps,
    MyLinkProps,
    CardPersonProps,
    CardAboutProps,
    CardUsefulLinksProps,
    TitleScreenProps,
    CaruselSurveyProps
}