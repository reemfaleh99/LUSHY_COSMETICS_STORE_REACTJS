import React, { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const dest = new Date("dec 30,2025").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = dest - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const mintues = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (different <= 0) {
        clearInterval(interval.current);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(mintues);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="flex gap-2 md:gap-3 items-center font-semibold">
      <div className="text-center">
        <h4 className="text-2xl md:text-3xl ">{days}</h4>
        <p className="text-xl md:text-xl ">Days</p>
      </div>
      :
      <div className="text-center">
        <h4 className="text-2xl md:text-3xl ">{hours}</h4>
        <p className="text-xl md:text-xl ">Hours</p>
      </div>
      :
      <div className="text-center">
        <h4 className="text-2xl md:text-3xl ">{minutes}</h4>
        <p className="text-xl md:text-xl ">Minutes</p>
      </div>
      :
      <div className="text-center">
        <h4 className="text-2xl md:text-3xl ">{seconds}</h4>
        <p className="text-xl md:text-xl ">Seconds</p>
      </div>
    </div>
  );
};

export default Clock;
