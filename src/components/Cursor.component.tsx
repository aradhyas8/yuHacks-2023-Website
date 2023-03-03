import { FunctionComponent, useEffect, useState } from 'react';
import './Cursor.css';

interface CursorProps {
  
}
 
const Cursor: FunctionComponent<CursorProps> = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(
    () => {
      document.addEventListener('mousemove', (e) => {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
        // console.log("mouseX: " + e.clientX, ", mouseY: " + e.clientY);
      });
      // document.addEventListener('')
    }, [mouseX, mouseY]
  )

  return (  
    <div 
      className="Cursor"
      style={{
        top: mouseY,
        left: mouseX,
      }}
    ></div>
  );
}
 
export default Cursor;