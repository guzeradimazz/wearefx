import { useEffect, useRef } from 'react'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

export default function Line({ polyline, isClicked, coords, amount, coords1 }) {
    const canvas = polyline
    useEffect(() => {
        return () => {
            // polyline.style.cssText = 'display:none;'
        }
    }, [])

    const idInterval = useRef(null)
    let ctx = canvas.getContext('2d')

    applyLayout(canvas)

    useEffect(() => {
        // return () => idInterval.current && clearInterval(idInterval.current)
    }, [])

    ctx.lineWidth = 1.3
    ctx.strokeStyle = '#f1bb00'

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

            let newValY = coords.first.y + i * stepY + randy
            let newValY1 = coords.first.y + i * stepY - randy

            let newValY2 = coords1.first.y + i * stepY1 + randy
            let newValY3 = coords1.first.y + i * stepY1 - randy

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
                moveLine(dots, i, newValY)
                moveLine(dots1, i, newValY1)

                moveLine(dots2, i, newValY2)
                moveLine(dots3, i, newValY3)

                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.strokeStyle = '#f1bb00'
                draw(dots)
                draw(dots2)
                ctx.strokeStyle = '#7344f4'
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

    let i = 1
    const length = dots.length - 1

    function draw1(x1, y1, x2, y2, x3, y3, x4, y4) {
        function run() {
            let j = 0
            const smoothFactor = 20

            const smallStepX =
                (dots[length - i].x - dots[length - i + 1].x) / smoothFactor
            const smallStepY =
                (dots[length - i].y - dots[length - i + 1].y) / smoothFactor

            const smallStepX1 =
                (dots1[length - i].x - dots1[length - i + 1].x) / smoothFactor
            const smallStepY1 =
                (dots1[length - i].y - dots1[length - i + 1].y) / smoothFactor
            const smallStepX2 = (dots2[i].x - dots2[i - 1].x) / smoothFactor
            const smallStepY2 = (dots2[i].y - dots2[i - 1].y) / smoothFactor

            const smallStepX3 = (dots3[i].x - dots3[i - 1].x) / smoothFactor
            const smallStepY3 = (dots3[i].y - dots3[i - 1].y) / smoothFactor

            let flag = true

            let id = requestAnimationFrame(() =>
                smooth(x1, y1, x2, y2, x3, y3, x4, y4)
            )

            function smooth(x1, y1, x2, y2, x3, y3, x4, y4) {
                if (j === smoothFactor) {
                    cancelAnimationFrame(id)
                    flag = false
                }

                if (flag) {
                    ctx.beginPath()
                    ctx.strokeStyle = '#f1bb00'
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x1 + smallStepX, y1 + smallStepY)
                    ctx.stroke()

                    ctx.beginPath()
                    ctx.strokeStyle = '#7344f4'
                    ctx.moveTo(x2, y2)
                    ctx.lineTo(x2 + smallStepX1, y2 + smallStepY1)
                    ctx.stroke()

                    ctx.beginPath()
                    ctx.strokeStyle = '#f1bb00'
                    ctx.moveTo(x3, y3)
                    ctx.lineTo(x3 + smallStepX2, y3 + smallStepY2)
                    ctx.stroke()

                    ctx.beginPath()
                    ctx.strokeStyle = '#7344f4'
                    ctx.moveTo(x4, y4)
                    ctx.lineTo(x4 + smallStepX3, y4 + smallStepY3)
                    ctx.stroke()

                    j++

                    requestAnimationFrame(() =>
                        smooth(
                            x1 + smallStepX,
                            y1 + smallStepY,
                            x2 + smallStepX1,
                            y2 + smallStepY1,
                            x3 + smallStepX2,
                            y3 + smallStepY2,
                            x4 + smallStepX3,
                            y4 + smallStepY3
                        )
                    )
                } else {
                    i++
                    if (i < dots.length) {
                        draw1(
                            dots[length - i + 1].x,
                            dots[length - i + 1].y,
                            dots1[length - i + 1].x,
                            dots1[length - i + 1].y,
                            dots2[i - 1].x,
                            dots2[i - 1].y,
                            dots3[i - 1].x,
                            dots3[i - 1].y
                        )
                    } else {
                        if (isClicked)
                            idInterval.current = setInterval(mix, 2000)
                    }
                }
            }
        }

        run()
    }

    useEffect(() => {
        set(dots, coords, stepX, stepY)
        set(dots1, coords, stepX, stepY)
        set(dots2, coords1, stepX1, stepY1)
        set(dots3, coords1, stepX1, stepY1)
        if (isClicked) {
            // draw1(
            //     dots[length].x,
            //     dots[length].y,
            //     dots1[length].x,
            //     dots1[length].y,
            //     dots2[0].x,
            //     dots2[0].y,
            //     dots3[0].x,
            //     dots3[0].y
            // )
        }
        if (!isClicked) {
            // ctx.restore()
            // ctx.clearRect(0, 0, canvas.width, canvas.height)
            // idInterval.current && clearInterval(idInterval.current)
        }
    }, [isClicked])

    function moveLine(dots, i, val1) {
        if (dots[i].y > val1) dots[i].y -= 1
        else dots[i].y += 1
    }

    return null
}
