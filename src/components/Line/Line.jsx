import React, { useEffect } from 'react'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

export default function Line({isClicked, coords, amount, coords1 }) {
    const canvas = document.getElementById('polylineCases')

    let ctx = canvas.getContext('2d')

    applyLayout(canvas)

    ctx.lineWidth = 1.3
    ctx.strokeStyle = 'red'

    let dots = Array(amount + 1)
    let dots1 = Array(amount + 1)
    let dots2 = Array(amount + 1)
    let dots3 = Array(amount + 1)

    const stepX = Math.floor((coords.last.x - coords.first.x) / amount)
    const stepY = Math.floor((coords.last.y - coords.first.y) / amount)
    const stepX1 = Math.floor((coords1.last.x - coords1.first.x) / amount)
    const stepY1 = Math.floor((coords1.last.y - coords1.first.y) / amount)

    const getRandomInt = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    const set = (dots, coords, stepX, stepY) => {
        dots[0] = { x: coords.first.x, y: coords.first.y }
        for (let i = 1; i < amount; ++i) {
            dots[i] = {
                x: coords.first.x + i * stepX + getRandomInt(-10, 10),
                y: coords.first.y + i * stepY + getRandomInt(-20, 20),
            }
        }
        dots[amount] = { x: coords.last.x, y: coords.last.y }
    }

    const mix = () => {
        for (let i = 1; i < amount; ++i) {
            let randy = getRandomInt(-60, 60)
            let randx = getRandomInt(-3, 3)

            let newValY = coords.first.y + i * stepY + randy
            let newValX = coords.first.x + i * stepX + randx
            let newValY1 = coords.first.y + i * stepY - randy
            let newValX1 = coords.first.x + i * stepX - randx

            let newValY2 = coords1.first.y + i * stepY1 + randy
            let newValX2 = coords1.first.x + i * stepX1 + randx
            let newValY3 = coords1.first.y + i * stepY1 - randy
            let newValX3 = coords1.first.x + i * stepX1 - randx

            let anim = true

            let id = requestAnimationFrame(interval)
            function interval() {
                if (
                    Math.abs(dots[i].y - newValY) <= 0.01 ||
                    Math.abs(dots2[i].y - newValY2) <= 0.01
                ) {
                    cancelAnimationFrame(id)
                    anim = false
                }
                debugger
                moveLine(dots, i, newValY, newValX)
                moveLine(dots1, i, newValY1, newValX1)

                moveLine(dots2, i, newValY2, newValX2)
                moveLine(dots3, i, newValY3, newValX3)

                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.strokeStyle = 'red'
                draw(dots)
                draw(dots2)
                ctx.strokeStyle = 'blue'
                draw(dots1)
                draw(dots3)
                if (anim) requestAnimationFrame(interval)
            }
        }
    }

    const draw = (dots) => {
        ctx.beginPath()
        ctx.moveTo(dots[0].x, dots[0].y)
        dots.forEach((dot) => {
            ctx.lineTo(dot.x, dot.y)
            ctx.moveTo(dot.x, dot.y)
        })
        ctx.stroke()
    }

    let idInterval

    useEffect(() => {
        set(dots, coords, stepX, stepY)
        set(dots1, coords, stepX, stepY)
        set(dots2, coords1, stepX1, stepY1)
        set(dots3, coords1, stepX1, stepY1)

        draw(dots)
        draw(dots1)
        draw(dots2)
        draw(dots3)

        if(isClicked) idInterval = setInterval(mix, 2000)
        if(!isClicked) clearInterval(idInterval)
    }, [isClicked])

    
    function moveLine(dots, i, val1, val2) {
        if (dots[i].y > val1) dots[i].y -= 1
        else dots[i].y += 1

        // if (dots[i].x > val2) dots[i].x -= 0.5;
        // else dots[i].x += 0.5;
    }

    return <div />
}
