import React from 'react'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

export default function Line({ coords, amount }) {
    const canvas = document.getElementById('polyline')
    applyLayout(canvas)
    let ctx = canvas.getContext('2d')


    ctx.lineWidth = 1.3;
    ctx.strokeStyle = 'red';

    let dots = Array(amount + 1);
    let dots1 = Array(amount + 1);

    let mousePos = {x: 0, y : 0};

    canvas.addEventListener('mousemove', (e) => {

        if (Math.sqrt(Math.abs(Math.pow(e.pageX - mousePos.x, 2) - Math.pow(e.pageY - mousePos.y, 2))) > 50) { // здесь можешь настроить чувствительность
            mousePos = {x: e.pageX, y : e.pageY};
            mix();
        }
    })

    const stepX = Math.floor((coords.last.x - coords.first.x) / amount);
    const stepY = Math.floor((coords.last.y - coords.first.y) / amount);

    const getRandomInt = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    dots[0] = dots1[0] = {x: coords.first.x, y: coords.first.y}

    const set = (dots) => {
        for (let i = 1; i < amount; ++i) {
            dots[i] = {
                x: coords.first.x + i * stepX + getRandomInt(-10, 10),
                y: coords.first.y + i * stepY + getRandomInt(-20, 20)
            }
        }
    }

    const mix = () => {
        for (let i = 1; i < amount; ++i) {
            let randy = getRandomInt(-20, 20);
            let randx = getRandomInt(-3, 3);
            let newValY = coords.first.y + i * stepY + randy;
            let newValX = coords.first.x + i * stepX + randx;
            let newValY1 = coords.first.y + i * stepY - randy;
            let newValX1 = coords.first.x + i * stepX - randx;
            let anim = true;

            var id = requestAnimationFrame(interval);
            function interval(){
                if(Math.abs(dots[i].y - newValY) <= 0.01){ //&& Math.abs(dots1[i].y - newValY1) <= 2.1){
                    cancelAnimationFrame(id);
                    anim = false;
                }
                moveLine(dots, i, newValY, newValX);
                moveLine(dots1, i, newValY1, newValX1);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle='red';
                draw(dots);
                ctx.strokeStyle='blue';
                draw(dots1)
                if (anim)
                requestAnimationFrame(interval);
            }
        }
    }
    set(dots);
    set(dots1);
    dots[amount] = dots1[amount] = {x: coords.last.x, y: coords.last.y}

    const draw = (dots) => {
        ctx.beginPath()
        ctx.moveTo(dots[0].x, dots[0].y);
        dots.forEach(dot => {
            ctx.lineTo(dot.x, dot.y);
            ctx.moveTo(dot.x, dot.y);
        })
        ctx.stroke();
    }

    draw(dots);
    draw(dots1);

    function moveLine (dots, i, val1, val2) {
        if (dots[i].y > val1) dots[i].y -= 1;
        else dots[i].y += 1;

        // if (dots[i].x > val2) dots[i].x -= 0.5;
        // else dots[i].x += 0.5;
    }

    return <div/>
}