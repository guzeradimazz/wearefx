import React,{useEffect,useRef,useState} from 'react';
import './MainPageButton.css'

const MainPageButton2 = () => {  
  const circleButtons =[
    {
        text:'story',
        customClass:'secondCircle MainPageButton',
        id:2
    }
  ]
  const ref2 = useRef();
  const [rect2, setRect2] = useState({x:0,y:0})
  const [buttons] = useState(circleButtons)

  useEffect(() => {
      setRect2(ref2.current.getBoundingClientRect())
  },[]);
    
    const canvas2 = document.getElementById('overlay2');
    canvas2.width = canvas2.clientWidth;
    canvas2.height = canvas2.clientHeight;
    const mouseCoords = {x: 0, y: 0};
    function joinPoints2(ctx, from, to, progress = 1) {
      const stroke2 = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      stroke2.addColorStop(0, 'white');
      ctx.strokeStyle = stroke2;
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(from.x+39, from.y-9);
      ctx.lineTo(to.x+20, to.y+20);
      ctx.stroke();
    }
    function onMove2(e) {
      mouseCoords.x = e.clientX;
      mouseCoords.y = e.clientY; 
    }
    function drawAnimLine2(canvas, duration) {
      const ctx = canvas.getContext('2d');
      let begin, progress;
      function draw(now) {
        begin = begin || now;
        progress = (now - begin) / duration % 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (rect2) {
          const x1 = rect2.x - window.scrollX;
          const y1 = rect2.y - window.scrollY;
          joinPoints2(ctx, {x: x1, y: y1}, mouseCoords, progress);
        }
        requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    }
    drawAnimLine2(canvas2, 150);
    window.addEventListener('mousemove', onMove2);

    return (

        <div>
          {buttons.map(button=>(
            <div ref={ref2} key={button.id} className={button.customClass}>{button.text}</div>
          ))}
        </div>
    );
};

export default MainPageButton2;