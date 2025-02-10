"use client";

import CountUp from "react-countup";

const Stats = ({ style }) => {
  const stats = [
    {
      num: 10,
      text: "Projects complete",
    },
    {
      num: 3,
      text: "Technologies mastered",
    },
    {
      num: 100,
      text: "Code commits",
    },
  ];

  return (
    <section className={style}>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p className="leading-snug text-white/80">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
