import React, { useState, useEffect } from "react";
import "./ProductCard.scss";
import Card from "./Card/Card";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Для отслеживания позиции курсора
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  

  // Массив карточек
  const cards = [
    { title: 'Website Layout', info: 'I will create a website based on the layout in Figma' },
    { title: 'Creating Landing', info: 'Creating a landing page based on a layout' },
    { title: 'Creating Layouts in Figma', info: 'I can create small layouts in Figma' },
    { title: 'Website Copywriting', info: 'I do not guarantee the copying result' },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [cards.length]);

  // Обрабатываем движение мыши
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <div className="carousel_container" onMouseMove={handleMouseMove}>
      <div className="card_wrapper">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`card_slide ${index === currentIndex ? 'active' : ''}`}
          >
            <Card textTitle={card.title} textInfo={card.info} />
          </div>
        ))}
      </div>

      <img 
        className="interactiveIMG firstIMG"
        src="./img/frontGroup.png" 
        alt="frontend"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
        }}
      />

      <img 
        className="interactiveIMG secondIMG"
        src="./img/UX_UI.png" 
        alt="UX_UI"
        style={{
          transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`,
        }}
      />
    </div>
  );
};

export default Carousel;
