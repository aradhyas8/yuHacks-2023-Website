import { FunctionComponent, useEffect, useRef, useState } from "react";

import './HeroAnimation.css';

interface HeroAnimationProps {
  
}
 
const HeroAnimation: FunctionComponent<HeroAnimationProps> = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [board, setBoard] = useState<Array<number>>([]);
  const ref = useRef<HTMLDivElement>(null);

  const [col, setCol] = useState(10);
  const [row, setRow] = useState(10);

  const TIMEOUT = 100;

  // let col = 0; let row = 0;
  // let board: Array<number> = [];

  // get height and width of container
  const setDimensionOnResize = () => {
    if(ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
      // calculate row and column 
      setCol(Math.floor(width / 16));
      setRow(Math.floor(height / 16));
      console.log("col: " + col + ", row: " + row);
    }
  }

  // generate board
  const generateBoard = () => {
    let temp: Array<number> = []
    for(let i = 0; i < col; i++) {
      for(let j = 0; j < row; j++) {
        temp.push(1);
      }
    }
    setBoard(temp);
    console.log("board size: " + board.length);
  }

  const resizeHandler = () => {
    setDimensionOnResize();
    setTimeout(generateBoard, TIMEOUT);
  }

  useEffect(
    () => {
      // on render
      setDimensionOnResize();
      setTimeout(generateBoard, TIMEOUT);

      // event listeners
      window.addEventListener("resize", setDimensionOnResize, false);  // on resize
      // window.addEventListener("resize", generateBoard, false);
    }, []
  )

  return (  
    <div ref={ref} className="AnimationContainer">
      <p>Height is: {height}, width is {width}.</p>
      {/* <div className="Circle" />
      <div className="Circle" />
      <div className="Circle" /> */}
      {
        // board.map((e) => {
        //   // return <div className="Circle" />
        //   return <div><p>p</p></div>
        // })
      }
    </div>
  );
}
 
export default HeroAnimation;