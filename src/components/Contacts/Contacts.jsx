import React, { forwardRef, useEffect, useState } from "react";
import "./Contacts.scss";

export default forwardRef(function Contacts(props, ref) {
  const [MouseMove, setMouseMove] = useState({ x: 0, y: 0 });
  const [isShadowVisible, setIsShadowVisible] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsShadowVisible((prevVisible) => !prevVisible);
    }, 2500);

    return () => clearInterval(timer);
  }, []);


  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouseMove({ x: clientX, y: clientY });
  };

  return (
    <div className="Contacts" ref={ref}>
      <div className="Contacts_title">
        <h2>Contacts</h2>
      </div>
      <div className="Contacts_container" onMouseMove={handleMouseMove}>
        <div className="Contacts_info">
          <img src="./img/qr-code.png" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />

          <div className="container_code">
            {isHovered ?(
                <h1>Write me on Telegram</h1>
            ):(
            
          <img
              style={{
                filter: isShadowVisible ? 'drop-shadow(0px 0px 10px #ffffff)' : 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0))',
                transition: 'filter 1s ease-out',
              }}
              src="./img/code.png"
            />)
          }
          </div>
        </div>

   
          <img className="IMG_Pencil"
            src="./img/pencil.png"
            style={{
              transform: `translate(${MouseMove.x * -0.02}px, ${MouseMove.y * -0.02}px)`,
            }}
          />
          <img className="IMG_UX"
            src="./img/UX.png"
            style={{
              transform: `translate(${MouseMove.x * 0.02}px, ${MouseMove.y * 0.02}px)`,
            }}
          />
      </div>
    </div>
  )
});
