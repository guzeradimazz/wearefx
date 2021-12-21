import React, { useEffect } from 'react'

export default function LineComp({coords}) {

    const canvas = document.getElementById('polyline')
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = 'blue';


    const getRandomInt = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    const pointsCount = 5

    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    let YStart = canvas.height*0.38
    const a = { x: 0, y: YStart },
        b = { x: coords.x, y: coords.y }

    const min = 5,
        max = 15

    for (let i = 0; i < pointsCount; i += 2) {
        const pointsClose = Math.abs(a.x - b.x) < 3 * max && Math.abs(a.y - b.y) < 3 * max
        if (pointsClose) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
            break
        }
        

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        a.x += getRandomInt(min, max)
        a.y += getRandomInt(min, max)
        ctx.lineTo(a.x, a.y)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(b.x, b.y)
        b.x -= getRandomInt(min, max)
        b.y -= getRandomInt(min, max)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
    }
    return <div></div>
}
