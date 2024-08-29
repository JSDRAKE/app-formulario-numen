import React, { useEffect, useState } from "react";

const Timer = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="timer-container">
      <h2>Tiempo transcurrido: {segundos}</h2>
    </div>
  );
};

export default Timer;
