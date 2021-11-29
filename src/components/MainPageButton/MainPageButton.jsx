import React,{useEffect,useRef,useState} from 'react';
import './MainPageButton.css'

const MainPageButton = () => {
  const circleButtons =[
    {
        text:'cases',
        customClass:'firstCircle MainPageButton',
        id:1
    }
  ]
  const ref = useRef();
  const [rect, setRect] = useState({x:0,y:0})
  const [buttons] = useState(circleButtons)

  useEffect(() => {
      setRect(ref.current.getBoundingClientRect())
  },[]);
    const canvas = document.getElementById('overlay');
    canvas.classList.remove('displayNone')
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const mouseCoords = {x: 0, y: 0};
    function joinPoints(ctx, from, to, progress = 1) {
      const stroke = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      stroke.addColorStop(0, 'white');
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(from.x+39, from.y+90);
      ctx.lineTo(to.x+20, to.y+20);
      ctx.stroke();
    }
    function onMove(e) {
      mouseCoords.x = e.clientX;
      mouseCoords.y = e.clientY; 
    }
    function drawAnimLine(canvas, duration) {
      const ctx = canvas.getContext('2d');
      let begin, progress;
      function draw(now) {
        begin = begin || now;
        progress = (now - begin) / duration % 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (rect) {
          const x1 = rect.x - window.scrollX;
          const y1 = rect.y - window.scrollY;
          joinPoints(ctx, {x: x1, y: y1}, mouseCoords, progress);
        }
        requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    }
    drawAnimLine(canvas, 150);
    window.addEventListener('mousemove', onMove);

    return (

        <div>
          {buttons.map(button=>(
            <div ref={ref} key={button.id} className={button.customClass}>{button.text}</div>
          ))}
        </div>
    );
};

export default MainPageButton;