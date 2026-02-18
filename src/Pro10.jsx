import { useState, useEffect } from "react";

const Pro10 = () => {

  const [screensize, setScreensize] = useState({
    Height: window.innerHeight,
    Width: window.innerWidth
  });

  const update = () => {
    setScreensize({
      Height: window.innerHeight,
      Width: window.innerWidth
    });
  };

  useEffect(() => {
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="demo">
      <h2>Window Size Tracker !!</h2>
      <h4>Height: {screensize.Height}px</h4>
      <h4>Width: {screensize.Width}px</h4>
    </div>
  );
};

export default Pro10;
