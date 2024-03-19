import React from 'react'

export interface coverProps {
    img: string,
    alt: string
}

export interface cardOverView {
    title: string
    desc: string
}

export interface cardPreparation {
    title:string
    data: {
     [key: string] : string | number
    }
}

export interface cardProp {
    children: React.ReactNode
}

