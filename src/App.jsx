import Ellipses from "./components/Ellipses.jsx";
import Widgets from "./components/Widgets.jsx";
import TextWidgets from "./components/TextWidgets.jsx";
import Header from "./components/Header.jsx";
import MainButton from "./components/MainButton.jsx";
import React, {useState, useEffect} from 'react';
import Switch from './components/Switch.jsx';
export default function App() {
  
 
  const [hover, setHover] = useState({
    Productivity: false,
    Entertainment: false,
    Educational: false
  });
  const [switcher, setSwitcher] = useState({
    Productivity: false,
    Entertainment: false,
    Educational: false
  });

  const handleHover = (type, isHovering) => {
    if(!switcher[type]){
      setHover(prev => ({ ...prev, [type]: isHovering }));
    }
    
  };

  const handleSwitch = (type) => {
    setSwitcher(prev => ({ ...prev, [type]: !prev[type] }));
  };


 
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 350;
      const y = (window.innerHeight - event.pageY * position) / 350;

      shift.style.transform = `translateX(${x}vw) translateY(${y}vw)`;
    });
  }

  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[100vh_auto]">
      <section className="snap-start relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#DAE2FF] to-[#24305E] mouse_move">
        <Header></Header>
        <h1 className="select-none absolute z-[1001] top-[17vw] left-[12vw] font-outfit text-[10vw] font-bold mix-blend-soft-light">
          widgify
        </h1>
        <Ellipses
          type="Ellipses-1"
          className="z-[1003] top-[28vh] left-[4vw] w-[5vw] h-[5vw] opacity-[1]"
          value="2"
        ></Ellipses>
        <Ellipses
          type="Ellipses-1"
          className="z-[1002] top-[28vh] left-[4vw] w-[6vw] h-[6vw] opacity-[0.8]"
          value="2.5"
        ></Ellipses>
        <Ellipses
          type="Ellipses-2"
          className="z-[1004] bottom-[28vh] left-[19vw] w-[10vw] h-[10vw] opacity-[1]"
          value="-2"
        ></Ellipses>
        <Ellipses
          type="Ellipses-2"
          className="z-[1005] bottom-[28vh] left-[19vw] w-[9vw] h-[9vw] opacity-[0.8]"
          value="-2.5"
        ></Ellipses>
        <Ellipses // big circle
          type="Ellipses-2"
          className="z-[1005] bottom-[10vh] right-[19vw] w-[21vw] h-[21vw] opacity-[1]"
        ></Ellipses>
        <MainButton></MainButton>
        <Ellipses
          type="Ellipses-1"
          className="z-[1003] top-[35vh] right-[4vw] w-[6vw] h-[6vw] opacity-[0.6]"
          value="3"
        ></Ellipses>
        <Ellipses
          type="Ellipses-1"
          className="z-[1002] top-[35vh] right-[4vw] w-[6.7vw] h-[6.7vw] opacity-[1]"
          value="2.5"
        ></Ellipses>
        <Ellipses
          type="Ellipses-1"
          className="z-[1003] top-[24.75vh] right-[42.5vw] w-[3vw] h-[3vw] opacity-[0.8]"
          value="-2"
        ></Ellipses>
        <Ellipses
          type="Ellipses-1"
          className="z-[1002] top-[24.75vh] right-[42.5vw] w-[3.3vw] h-[3.3vw] opacity-[1]"
          value="-2.2"
        ></Ellipses>
      </section>
      <div
       className="snap-start grid grid-cols-2 bg-[#24305E] overflow-hidden"
        id="widgi"
      >
        <div className="border-solid border-r-4">
          <Widgets 
          type="Productivity"
          onHover={handleHover}
          hovered = {hover.Productivity}
          onSwitch = {handleSwitch}>
             <Switch onChange={() => handleSwitch('Productivity')} checked={switcher.Productivity} />
            <TextWidgets type="Productivity" hovered = {hover.Productivity} >PRODUCTIVITY</TextWidgets>
          </Widgets>
        </div>
        <div className="grid grid-rows-2 ">
          <div className="border-solid border-b-4">
            <Widgets 
            type="Entertainment"
            hovered = {hover.Entertainment}
            onHover={handleHover}
            onSwitch={handleSwitch}>
               <Switch onChange={() => handleSwitch('Entertainment')} checked={switcher.Entertainment} />
              <TextWidgets type="Entertainment" hovered = {hover.Entertainment}>ENTERTAINMENT</TextWidgets>
            </Widgets>
          </div>
          <div>
            <Widgets 
            type="Educational"
            hovered={hover.Educational}
            onHover={handleHover}
            onSwitch={handleSwitch} 
            >
               <Switch onChange={() => handleSwitch('Educational')} checked={switcher.Educational} />
              <TextWidgets type="Educational" hovered={hover.Educational}>EDUCATIONAL</TextWidgets>
            </Widgets>
          </div>
        </div>
      </div>
    </div>
  );
}