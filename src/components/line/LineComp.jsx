import React, { useEffect } from 'react'

export default function LineComp({ coords }) {
    const canvas = document.getElementById('polyline')
    let ctx = canvas.getContext('2d')

    useEffect(() => {
        ctx.strokeStyle = 'rgb(248, 255, 143)'
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
    }, [])

    const getRandomInt = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    let YStart = canvas.height * 0.38

    const dotList = [
        { x: 1, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: 1 },
    ]
    const a = { x: 0, y: YStart },
        b = { x: coords.x - 10, y: coords.y }

    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke()

    return <div></div>
}
