import React,{useEffect,useRef,useState} from 'react';
import './MainPageButton.css'

const MainPageButton2 = () => {  
  const circleButtons =[
    {
        text:'hire us',
        customClass:'thirdCircle MainPageButton',
        id:3
    }
  ]
  const ref3 = useRef();
  const [rect3, setRect3] = useState({x:0,y:0})
  const [buttons] = useState(circleButtons)

  useEffect(() => {
      setRect3(ref3.current.getBoundingClientRect())
  },[]);
    
    const canvas3 = document.getElementById('overlay3');
    canvas3.width = canvas3.clientWidth;
    canvas3.height = canvas3.clientHeight;
    const mouseCoords = {x: 0, y: 0};
    function joinPoints3(ctx, from, to, progress = 1) {
      const stroke3 = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      stroke3.addColorStop(0, 'white');
      ctx.strokeStyle = stroke3;
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x+20, to.y+20);
      ctx.stroke();
    }
    function onMove3(e) {
      mouseCoords.x = e.clientX;
      mouseCoords.y = e.clientY; 
    }
    function drawAnimLine3(canvas, duration) {
      const ctx = canvas.getContext('2d');
      let begin, progress;
      function draw(now) {
        begin = begin || now;
        progress = (now - begin) / duration % 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (rect3) {
          const x1 = rect3.x - window.scrollX;
          const y1 = rect3.y - window.scrollY;
          joinPoints3(ctx, {x: x1, y: y1}, mouseCoords, progress);
        }
        requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    }
    drawAnimLine3(canvas3, 150);
    window.addEventListener('mousemove', onMove3);

    return (

        <div>
          {buttons.map(button=>(
            <div ref={ref3} key={button.id} className={button.customClass}>{button.text}</div>
          ))}
        </div>
    );
};

export default MainPageButton2;