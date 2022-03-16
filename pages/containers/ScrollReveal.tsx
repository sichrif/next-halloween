import React, { useRef, useEffect, FC, CSSProperties } from "react";
 
import "./ScrollReveal.module.css";

interface ScrollRevealProps {
  style: CSSProperties;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, style }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    async function animate() {
    if (sectionRef.current){
      const sr = (await import("scrollreveal")).default

    sr().reveal(`.home-swiper, .new-swiper, .newsletter__container`,{delay: 500})
    sr().reveal(`.category__data, .trick__content, .footer__content`,{interval: 100,delay: 500})
    sr().reveal(`.about__data, .discount__img`,{origin: 'left',delay: 500})
    sr().reveal(`.about__img, .discount__data`,{origin: 'right',delay: 500})
      
    }
  }
  animate();
  }, []);

  return (
    <section
      ref={sectionRef}
  
     
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
