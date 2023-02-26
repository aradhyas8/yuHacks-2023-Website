import { FunctionComponent, useEffect, useRef, useState } from 'react';
import './Cursor.css';

interface CursorProps {
  
}
 
const Cursor: FunctionComponent<CursorProps> = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      window.addEventListener("mousedown", (e) => {
        if(ref.current) {
          ref.current.style.left = e.pageX + "px";
          ref.current.style.right = e.pageY + "px";
        }
      })
    }, []
  )

  return (  
    <div className="Cursor" >
      V
    </div>
  );
}
 
export default Cursor;