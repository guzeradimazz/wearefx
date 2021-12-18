import React, { useEffect } from 'react'
import Polyline from 'react-polyline/node_modules/react/react/'

export default function LineComp({coords}) {
    // return(
    //     <div><Polyline
    //     coordinates={[
    //       {x: 10, y: 20},
    //       {x: 10, y: 100},
    //       {x: 10, y: 200},
    //     ]}
    //     style="5px solid orange"
    //     closed={true}
    //   /></div>
    // )
    // const canvas = document.getElementById('polyline')
    // let ctx = canvas.getContext('2d')
    // ctx.fillStyle = 'blue';


    // const getRandomInt = (min, max) => {
    //     return Math.floor(min + Math.random() * (max + 1 - min))
    // }

    // const pointsCount = 5

    // canvas.width = 300
    // canvas.height = 300

    // const a = { x: 0, y: 200 },
    //     b = { x: coords.x, y: coords.y }

    // const min = 5,
    //     max = 15

    // for (let i = 0; i < pointsCount; i += 2) {
    //     const pointsClose =
    //         Math.abs(a.x - b.x) < 3 * max && Math.abs(a.y - b.y) < 3 * max
    //     if (pointsClose) {
    //         ctx.beginPath()
    //         ctx.moveTo(a.x, a.y)
    //         ctx.lineTo(b.x, b.y)
    //         ctx.stroke()
    //         break
    //     }
        

    //     ctx.beginPath()
    //     ctx.moveTo(a.x, a.y)
    //     a.x += getRandomInt(min, max)
    //     a.y += getRandomInt(min, max)
    //     ctx.lineTo(a.x, a.y)
    //     ctx.stroke()

    //     ctx.beginPath()
    //     ctx.moveTo(b.x, b.y)
    //     b.x -= getRandomInt(min, max)
    //     b.y -= getRandomInt(min, max)
    //     ctx.lineTo(b.x, b.y)
    //     ctx.stroke()
    // }
    // return <div></div>
}
