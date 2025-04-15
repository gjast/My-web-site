import { useState, useRef } from "react";
import "./App.css";
import Landing from "./components/Landig/Landing";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";


function App() {

   const section1Ref = useRef(null);
   const section2Ref = useRef(null);
   const section3Ref = useRef(null);
 
   const scrollToSection = (sectionRef) => {
     if (sectionRef.current) {
       sectionRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     }
   };

  return (
    <>
    <video src="/img/infinite-space-moewalls-com.mp4" autoPlay loop muted className="video-background" />
     <Landing onScrollToSection={scrollToSection}
        refs={{
          section1Ref,
          section2Ref,
          section3Ref,
        }}/>
     <About ref={section1Ref}/>
     <Services ref={section2Ref}/>
     <Contacts ref={section3Ref}/>
    </>
  );
}

export default App; 
