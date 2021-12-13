// import React, { useEffect } from 'react'

// export default function LineComp() {
//     const layout = document.getElementById('polyline')
//     let ctx = layout.getContext('2d')
//     let x = 0,
//         y = 100
//     useEffect(() => {
//         for (var i = 0; i < 5; i += 1) {
//             let sign = Math.random() < 0.5 ? -1 : 1
//             let a = Math.random() * 10 * sign
//             let b = Math.random() * 10 * sign
//             ctx.beginPath()
//             ctx.addColorStop(1,'white')
//             ctx.moveTo(x, y)
//             ctx.lineTo((x += i + a), (y += i + b))
//             ctx.stroke()
//         }
//     }, [])
//     return <div></div>
// }
