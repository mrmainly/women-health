import { StringifyOptions } from 'querystring'
import React from 'react'

interface ButtonProps {
    children: any,
    onClick?: () => void,
    variant?: string,
    style?: any,
    sx?: any,
    color?: any
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
    name: any
    infoImg: any,
    tag: any,
    description: any
}

interface CardAboutProps {
    title: any,
    body?: string,
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
    description?: string,
    sx?: any
}

interface CaruselSurveyProps {
    label: any,
    img: any,
    link: any,
    id?: number
}

interface TextInfoScreenProps {
    data: any,
    dangerText?: string
}

interface InfoBlockScreenProps {
    title: string,
    description: string,
    img: any,
    infoImg: any
}

interface FormProps {
    children: any,
    sx?: any,
    onSubmit?: any
}

interface InputProps {
    ref: any,
    label?: any,
    sx?: any,
    variant: any,
    rows?: number,
    id?: any,
    multiline?: any,
    type?: string,
    required?: any
}

interface PageHeaderTextProps {
    title: any,
    description?: any,
    titleSize: any,
    tag: any,
    showLine?: boolean,
}

interface ArrowNextProps {
    onClick?: any,
    className?: any,
    style?: any
}

interface ArrowPrevProps {
    onClick?: any,
    className?: any,
    style?: any
}

interface BreastFormProps {
    arr?: any,
    id?: any,
    date?: any
}

interface ModalSurveyStatusProps {
    descriptions?: string
}

interface SurveyProps {
    id: number,
    research: any,
    organisation: string,
    name: string,
    slug: string,
    dangerScore: number,
    criticalScore: number,
}

interface TabPanelProps {
    children?: React.ReactNode;
    index?: any;
    value?: any;
}

interface CardProps {
    schedule: any
};

interface TimeButtonProps {
    appointment: any
    index: number
}

interface ResultsProps {
    id: number,
    name: string,
    research_type: any
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
    CaruselSurveyProps,
    TextInfoScreenProps,
    InfoBlockScreenProps,
    FormProps,
    InputProps,
    PageHeaderTextProps,
    ArrowNextProps,
    ArrowPrevProps,
    BreastFormProps,
    ModalSurveyStatusProps,
    SurveyProps,
    TabPanelProps,
    CardProps,
    TimeButtonProps,
    ResultsProps
}