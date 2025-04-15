import React, { useEffect, useRef, forwardRef, useState } from "react";

import ContImg from "./ContImg/ContImg";
import "./About.scss";

export default forwardRef( function About (props, ref) {

  const [showElements, setShowElements] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowElements(true); // Показываем элементы, если они видимы
        }
      },
      {
        threshold: 0.1, // Элемент считается видимым, если 10% его видны на экране
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current); // Наблюдаем за контейнером
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current); // Очищаем слушатель при размонтировании
      }
    };
  }, []);


  return (
    <div className="About" ref={ref}>
      <div className="About_container">
        <div className="About_container_title">
          <h2>About me</h2>
        </div>
        <div className="About_container_content">
          <div className="About_container_text">
            <p>
              Aspiring and passionate frontend developer who creates modern and
              functional user interfaces. In my work, I adhere to the principles
              of clean code, convenience and adaptability. I also have design
              skills in Figma, which allows me to develop interfaces from
              scratch - from the idea to their implementation in code. I
              constantly improve my knowledge and am not afraid of complex
              tasks. My goal is to create products that not only look
              attractive, but also give users comfort when interacting.
            </p>
          </div>

          <div
      className={`About_container_img ${showElements ? "visible" : "hidden"}`}
      ref={containerRef}
    >
      <ContImg img="reactIMG" />
      <ContImg img="figma 2" />
      <ContImg img="htmlIMG" />
      <ContImg img="sassIMG" />
      <ContImg img="jsIMG" />
      <ContImg img="jqueryIMG" />
    </div>
        </div>
      </div>
    </div>
  );
}
)