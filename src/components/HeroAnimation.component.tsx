import { FunctionComponent, useEffect, useRef, useState } from "react";

import './HeroAnimation.css';

interface HeroAnimationProps {
  
}
 
const HeroAnimation: FunctionComponent<HeroAnimationProps> = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // get height and width of container
  const setDimensionOnResize = () => {
    if(ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }
  }

  useEffect(
    () => {
      setDimensionOnResize();  // on render
      window.addEventListener("resize", setDimensionOnResize, false);  // on resize
    }, []
  )

  return (  
    <div ref={ref} className="AnimationContainer">
      <p>Height is: {height}, width is {width}.</p>
      <div className="Circle" />
    </div>
  );
}
 
export default HeroAnimation;